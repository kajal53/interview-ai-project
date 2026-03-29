const path = require("path")
const { createRequire } = require("module")
const mongoose = require("mongoose")

let memoryServer = null

function loadMongoMemoryServer() {
    const repoRoot = path.join(__dirname, "..", "..", "..")
    const rootRequire = createRequire(path.join(repoRoot, "package.json"))
    return rootRequire("mongodb-memory-server")
}

async function resolveMongoUri() {
    const useMemory =
        process.env.MONGO_USE_MEMORY === "1" ||
        process.env.MONGO_USE_MEMORY === "true"

    if (useMemory) {
        const { MongoMemoryServer } = loadMongoMemoryServer()
        memoryServer = await MongoMemoryServer.create()
        return memoryServer.getUri()
    }

    const uri = (process.env.MONGO_URI || process.env.MONGO_URL || "").trim()
    return uri || null
}

async function connectToDB() {
    let uri
    try {
        uri = await resolveMongoUri()
    } catch (err) {
        console.error(err)
        process.exit(1)
    }

    if (!uri) {
        console.error(
            "MongoDB: set MONGO_URI or MONGO_URL, or MONGO_USE_MEMORY=1 for dev (in-memory)."
        )
        process.exit(1)
    }

    const dbName = (process.env.MONGO_DB_NAME || "interview-master").trim()

    try {
        await mongoose.connect(uri, { dbName })
        if (memoryServer) {
            console.log(
                "Connected to in-memory MongoDB (MONGO_USE_MEMORY=1); data resets when the server stops."
            )
        } else {
            console.log("Connected to Database")
        }
    } catch (err) {
        console.error(err)
        if (err?.codeName === "AtlasError" || err?.message?.includes("bad auth")) {
            console.error(
                "MongoDB authentication failed. Fix Atlas credentials, or set MONGO_USE_MEMORY=1 for local dev."
            )
        }
    }
}

module.exports = connectToDB