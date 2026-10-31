# WorldWise 🌍

> **An AI-Powered Smart Travel Tracking & Itinerary Planning Web Application**  
> Built with React, Node.js, Express, MongoDB, Google Gemini AI, and Leaflet Maps.

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.5-646CFF?logo=vite)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-22-green?logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.21-lightgrey?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Gemini AI](https://img.shields.io/badge/Google-Gemini_AI-4285F4?logo=google)](https://ai.google.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📖 Overview

**WorldWise** is a full-stack travel companion platform designed to transform how travelers plan and document journeys. Users can log visited cities on an interactive global map, store personalized travel notes, and generate complete, day-by-day travel itineraries powered by **Google Gemini AI**.

Whether backpacking across Europe or organizing a weekend getaway, WorldWise curates custom hotel recommendations, flight budget estimates, daily activity plans, and authentic localized experiences.

---

## ✨ Key Features

- **🗺️ Interactive Map Tracking**: Pin visited cities, explore geographic coordinates, and view detailed city notes using **Leaflet** & **React-Leaflet**.
- **🤖 AI Travel Itinerary Planner**: Leverages **Google Gemini AI** to generate personalized itineraries tailored to budget, duration, trip style, and group size.
- **🏨 Live Hotel & Destination Imagery**: Dynamically fetches curated photos of hotels and tourist attractions using the **Google Custom Search API**.
- **🔐 Secure Authentication & User Profiles**: Complete signup, login, and protected routes backed by **JWT (JSON Web Tokens)** and **bcrypt** password encryption.
- **☁️ Cloud Asset Storage**: Integrated with **Cloudinary** for seamless profile picture and travel image uploads.
- **🎨 Modern & Responsive Design**: Crafted with **Tailwind CSS**, styled-components, and smooth micro-interactions via **Framer Motion**.

---

## 🛠️ Tech Stack

| Domain | Technologies |
|---|---|
| **Frontend** | React 18, Vite, React Router v6, Context API, Tailwind CSS, Framer Motion, Leaflet |
| **Backend** | Node.js, Express.js, RESTful API Architecture |
| **Database** | MongoDB Atlas, Mongoose ODM |
| **AI & APIs** | Google Gemini Generative AI, Google Custom Search API, BigDataCloud Geocoding |
| **Auth & Security**| JWT (JSON Web Tokens), bcryptjs, Cookie Parser, CORS |
| **Cloud Services** | Cloudinary (Media management), Firebase Admin SDK |

---

## 📂 Project Structure

```text
WorldWise/
├── backend/
│   ├── config/             # Database & Cloudinary configurations
│   ├── controllers/        # Business logic for auth, trips, cities
│   ├── middlewares/        # Authentication & file upload middlewares
│   ├── models/             # Mongoose schemas (User, Trips, City)
│   ├── routes/             # Express API routes
│   ├── utils/              # Utility helpers & token generators
│   ├── .env.example        # Backend environment variables template
│   ├── index.js            # Express server entry point
│   └── package.json
│
├── frontend/
│   ├── public/             # Static public assets
│   ├── src/
│   │   ├── components/     # Reusable UI components (Map, CityItem, Forms, Nav)
│   │   ├── config/         # Centralized API endpoints configuration
│   │   ├── contexts/       # React Contexts (AuthContext, CitiesContext)
│   │   ├── gemini/         # AI Prompt engineering & Gemini API handlers
│   │   ├── hooks/          # Custom React hooks (useUrlPosition, etc.)
│   │   ├── pages/          # App pages (Homepage, Login, SignUp, AppLayout, Trips)
│   │   ├── styles/         # Global styles and Tailwind configuration
│   │   └── App.jsx         # App router and providers
│   ├── .env.example        # Frontend environment variables template
│   ├── vite.config.js      # Vite build and proxy configuration
│   └── package.json
│
├── .gitignore              # Root git ignore
├── README.md               # Project documentation
└── start-dev.bat           # One-click Windows development launcher
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas cluster URI)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/Vivek-295/WorldWise.git
cd WorldWise
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env and supply your MongoDB URL, JWT Secret, and API keys

# Start backend server
npm run dev
```

> The backend will be live at `http://localhost:4000`

### 3. Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env and configure Gemini AI API key if needed

# Start frontend dev server
npm run dev
```

> The application will open at `http://localhost:5173`

---

## 📡 Core API Endpoints

| Method | Endpoint | Description | Protected |
|---|---|---|:---:|
| `POST` | `/api/auth/register` | Register a new user | ❌ |
| `POST` | `/api/auth/login` | Authenticate user & issue JWT | ❌ |
| `GET` | `/api/auth/profile` | Retrieve authenticated user profile | ✅ |
| `POST` | `/api/auth/trips/tripregister` | Save newly created travel itinerary | ✅ |
| `GET` | `/api/auth/trips/fetch` | Fetch all trips saved by user | ✅ |
| `GET` | `/api/auth/city/get` | Retrieve visited cities collection | ✅ |
| `POST` | `/api/auth/city/add` | Log a new city with geo-coordinates | ✅ |

---

## 👨‍💻 Author

**Vivek Yadav**
- GitHub: [@Vivek-295](https://github.com/Vivek-295)
- Email: brovicky295@gmail.com

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
