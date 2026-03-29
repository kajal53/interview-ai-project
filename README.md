#  AI Interview Prep — Smart Interview Preparation Tool

An AI-powered full-stack web application that analyzes your resume and job description to generate a personalized interview preparation plan using Google Gemini AI.

---

##  Features

-  **Resume Upload** — Upload your PDF resume for AI analysis
-  **AI Interview Report** — Get tailored technical & behavioral questions with answers
-  **Job Match Score** — See how well your profile matches the job
-  **Skill Gap Analysis** — Know exactly what skills you're missing
-  **Day-wise Preparation Plan** — A structured plan to ace your interview
-  **AI Resume Generator** — Generate an ATS-friendly resume tailored to the job
-  **Authentication** — Secure login/register with JWT cookies
-  **Report History** — Access all your past interview reports

---

##  Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | REST API Server |
| MongoDB + Mongoose | Database |
| Google Gemini AI | AI Report Generation |
| Puppeteer | Resume PDF Generation |
| JWT + Bcrypt | Authentication |
| Multer | File Upload |
| pdf-parse | Resume PDF Reading |

### Frontend
| Technology | Purpose |
|---|---|
| React 19 + Vite | UI Framework |
| React Router v7 | Client-side Routing |
| Axios | API Calls |
| SCSS | Styling |

---

##  Project Structure

```
interview-ai-project/
├── Backend/
│   ├── src/
│   │   ├── controllers/       # Auth & Interview logic
│   │   ├── routes/            # API routes
│   │   ├── models/            # Mongoose models
│   │   ├── middlewares/       # JWT auth, file upload
│   │   ├── services/          # Gemini AI + PDF generation
│   │   └── config/            # Database connection
│   ├── server.js
│   └── .env
│
└── Frontend/
    └── src/
        └── features/
            ├── auth/          # Login, Register
            └── interview/     # Home, Interview report pages
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account (free) — [mongodb.com/atlas](https://www.mongodb.com/cloud/atlas/register)
- Google Gemini API Key — [aistudio.google.com](https://aistudio.google.com)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/interview-ai-project.git
cd interview-ai-project
```

---

### 2. Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend` folder:

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/interview-ai
JWT_SECRET=your_random_secret_key_here
GOOGLE_GENAI_API_KEY=your_gemini_api_key_here
```

Start the backend server:

```bash
npm run dev
```

You should see:
```
Server is running on port 3000
Connected to Database
```

---

### 3. Frontend Setup

Open a new terminal:

```bash
cd Frontend
npm install
npm run dev
```

---

##  Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Backend server port (default: 3000) |
| `MONGO_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret key for JWT token signing |
| `GOOGLE_GENAI_API_KEY` | Google Gemini AI API key |

---

## 📡 API Endpoints

### Auth Routes
| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/api/auth/register` | Register new user | Public |
| POST | `/api/auth/login` | Login user | Public |
| GET | `/api/auth/logout` | Logout user | Public |
| GET | `/api/auth/get-me` | Get current user | Private |

### Interview Routes
| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/api/interview/` | Generate interview report | Private |
| GET | `/api/interview/` | Get all reports | Private |
| GET | `/api/interview/report/:id` | Get report by ID | Private |
| POST | `/api/interview/resume/pdf/:id` | Generate resume PDF | Private |

---

##  How to Use

1. **Register/Login** to your account
2. **Paste the Job Description** you are applying for
3. **Upload your Resume** (PDF) or write a quick self-description
4. Click **Generate My Interview Strategy**
5. Get your personalized report with:
   - Match Score
   - Technical & Behavioral Questions
   - Skill Gaps
   - Day-wise Prep Plan
6. Download a tailored **AI Resume PDF**
---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
