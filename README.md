# Worksy 🛠️

Worksy is a minimal, clean, and stable MERN stack application designed as a student-focused, local-service platform MVP. It connects people who need temporary local services (Customers) with student workers looking for flexible earning opportunities (Workers).

The application is themed around a warm, earthy terracotta/peach aesthetic and is optimized for the local community of Coimbatore, Tamil Nadu, India. indiaaa

---

## 🚀 Key Features

### 🌟 Premium Landing Page
- Left-aligned, spacious visual layout with Coimbatore local stats and active region badges.
- Custom vector hero illustration showcasing local services.
- **One-Click Role Selection:** Allows users to choose between *"I Need a Service"* (Customer) or *"I'm Looking for Work"* (Worker). It automatically passes the selection to the register page and pre-selects the correct role.

### 👥 Customer Workflow
- **Post a Gig:** Customers can post new gigs with a Title, Description, Category (Plumbing, Cleaning, Electrical, Moving, etc.), Location, and Estimated Payment (pre-configured with Coimbatore locations like RS Puram or Peelamedu, and ₹ currency).
- **Gig Management:** Monitor posted gigs, view applicants, accept workers, and mark gigs as completed.
- **Dynamic Stats:** Monitor active, open, and completed gigs directly from the customer dashboard.

### 💼 Worker Workflow
- **Browse Gigs:** Browse available, open local gigs that the worker hasn't applied for yet.
- **Apply for Gigs:** Apply to a gig with one click.
- **Track Gigs:** Keep track of applied, assigned, or completed tasks in a dedicated tab.
- **Dynamic Stats:** Monitor total available gigs, applied applications, assigned jobs, and earnings.

### 🔒 Authentication & Demo Mode
- **JWT & Password Hashing:** Backend authentication configured with bcryptjs and JWT tokens.
- **Bypass Demo Mode:** In-memory context-based mock authentication and gig state management on the frontend to allow testing the full workflow completely without requiring a live MongoDB database.

---

## 🛠️ Tech Stack

- **Frontend:**
  - React (v19)
  - Vite (v8)
  - Tailwind CSS (v4)
  - React Router DOM (v7)
- **Backend:**
  - Node.js & Express
  - MongoDB & Mongoose
  - JSON Web Tokens (JWT) & bcryptjs
  - dotenv & cors

---

## 📁 Project Structure

```text
worksy/
├── WORKSY_PROJECT_EXPLANATION.doc  # Comprehensive doc for project reviews/exams
├── README.md                       # This file
├── backend/                        # Express API Server
│   ├── config/                     # Database configurations
│   ├── controllers/                # Auth & Gig Controllers
│   ├── middleware/                 # Auth JWT check middleware
│   ├── models/                     # Mongoose Schemas (User)
│   ├── routes/                     # Router paths (authRoutes)
│   ├── server.js                   # Backend Entry Point
│   └── package.json
└── frontend/                       # Vite + React Frontend
    ├── public/                     # Static assets (logo, illustrations)
    ├── src/
    │   ├── assets/                 # CSS and styling resources
    │   ├── components/             # Reusable UI (GigCard, ProtectedRoute)
    │   ├── context/                # Global contexts (AuthContext, GigContext)
    │   ├── pages/                  # Page Views (Landing, Login, Register, Dashboards)
    │   ├── App.jsx                 # Routing configuration
    │   ├── index.css               # Tailwind CSS v4 custom styling & fonts
    │   └── main.jsx
    └── package.json
```

---

## ⚡ Quick Start (Local Setup)

Follow these steps to run the application locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### 1. Set Up the Backend
1. Open a terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` root directory and add the following configuration:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/worksy
   JWT_SECRET=supersecretworksyjwtkey
   ```
4. Run the backend server (optional for demo mode):
   ```bash
   npm run dev
   ```

### 2. Set Up the Frontend
1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the link displayed in your terminal (usually [http://localhost:5173/](http://localhost:5173/)).

---

## 💡 Notes for Examiners & Reviewers
- The project is configured with a **Frontend Demo Mode** by default. If a local MongoDB instance is not active, you can still sign in, register, post gigs, apply for gigs, and complete them! The state will be preserved in your browser's memory until you refresh the page.
- Visual elements (such as the main illustrations and Worksy logo) are custom-generated vector assets tailored for the Coimbatore student/local community feel.
- Custom fonts are imported from Google Fonts (**Plus Jakarta Sans**) for a clean, premium visual aesthetic.
