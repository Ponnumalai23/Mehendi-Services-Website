# Mehendi Services Website 💚

A full-stack Mehendi booking platform built with **React** for the frontend and **Node.js + Express + MongoDB** for the backend.

This project allows users to browse Mehendi artists, book appointments, and manage services, while the admin panel enables artist and inquiry management.

---

## 📁 Folder Structure
mehendi-website/
├── client/ → React frontend
├── server/ → Node.js + Express backend
└── README.md → Project documentation


---

## 🚀 Tech Stack

### Frontend:
- React.js
- HTML5, CSS3
- Axios
- React Hooks

### Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
 
---

## 🛠️ How to Run the Project

### ✅ Prerequisites:
Make sure you have the following installed:
- Node.js & npm
- MongoDB  

---

### 1️⃣ Run Frontend (React)

```bash
# Step into the client folder
cd client

# Install dependencies
npm install

🌐 The app will run on: http://localhost:3000

---
###2️⃣ Run Backend (Node.js + MongoDB)

# Step into the server folder
cd server

# Install backend dependencies
npm install

# Create a .env file with the following content:
# .env
PORT=8080
MONGO_URI="mongodb://localhost:27017/Mehndi"

# Start the backend server
npm nodemon

🌐 The backend will run on: http://localhost:8080

🔧 Features

💼 Admin dashboard to manage Mehendi artists and bookings

👩‍🎨 Artist profile listing and details

📅 Booking form

📧 Inquiry/contact form

🔐 Secure environment using .env


