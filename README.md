# 🏥 Hospital Management System (Frontend)

A modern **Hospital Management System Frontend** built with **React + Vite + Tailwind CSS**, designed for managing hospital workflows including **Admin, Doctor, Receptionist, and Pharmacist panels**.

The system includes role-based dashboards, patient registration, token generation, prescriptions, and queue management.

---

## 🚀 Features

### 🔐 Authentication

- Login system for all roles (Admin, Doctor, Receptionist, Pharmacist)
- Role-based routing protection
- JWT token stored in localStorage

---

### 🧑‍⚕️ Admin Panel

- Dashboard overview
- Create medical staff (Doctor, Receptionist, Pharmacist)
- Manage users (View/Delete)
- Modern UI with hospital theme

---

### 👨‍⚕️ Doctor Panel

- Doctor dashboard (waiting & checked patients stats)
- Patient queue management
- Prescription creation system
- Medicine management per prescription

---

### 🏥 Receptionist Panel

- Patient registration form
- Token generation system
- Token slip printing
- Daily token tracking
- Recent tokens overview

---

### 💊 Pharmacist Panel

- Search tokens
- View prescriptions
- Medicine dispensing workflow

---

## 🎨 UI/UX Design

- Modern **glassmorphism UI**
- Dark + medical blue/cyan theme
- Responsive design (Mobile + Desktop)
- Smooth animations & hover effects
- Consistent UI across all roles
- Tailwind CSS utility-first styling

---

## 🛠️ Tech Stack

- ⚛️ React.js (Vite)
- 🎨 Tailwind CSS
- 🌐 Axios (API handling)
- 🔐 JWT Authentication
- 🧭 React Router DOM
- 🎯 React Icons

---

## 📁 Project Structure

src/
│
├── api/ # Axios instance
├── components/ # Reusable UI components
├── layouts/ # Role-based layouts (Admin, Doctor, etc.)
├── pages/
│ ├── admin/
│ ├── doctor/
│ ├── receptionist/
│ ├── pharmacist/
│ └── auth/
│
├── routes/
│ └── ProtectedRoute.jsx
│
├── App.jsx
└── main.jsx

---

## 🔐 Role Access

| Role         | Access Features            |
| ------------ | -------------------------- |
| Admin        | Manage users, create staff |
| Doctor       | Queue, prescriptions       |
| Receptionist | Register patients, tokens  |
| Pharmacist   | View prescriptions         |

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/mobeenn/Hospital-Management-System-Frontend.git
2. Install dependencies
npm install
3. Setup environment variables

Create .env file:

VITE_API_URL=http://localhost:5000/api
4. Run the project
npm run dev
🔗 Backend API

Make sure backend is running on:

http://localhost:5000/api
```
