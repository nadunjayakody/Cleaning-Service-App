# Cleaning Service App 🧼

A full-stack web application for booking and managing cleaning services. Built with Node.js, Express, MongoDB (Backend) and React, Redux (Frontend).

---
```
## 📁 Project Structure
cleaning-service-app/
├── backend/                  # Backend - Node.js, Express, MongoDB
│   ├── middleware/           # Authentication middleware
│   │   └── auth.js
│   ├── models/               # Mongoose data models
│   │   ├── User.js
│   │   ├── Service.js
│   │   └── Booking.js
│   ├── routes/               # API route handlers
│   │   ├── users.js
│   │   ├── services.js
│   │   └── bookings.js
│   ├── seeder.js             # Seed data for testing
│   ├── server.js             # Backend entry point
│   └── package.json          # Backend dependencies
├── frontend/                 # Frontend - React + Redux
│   ├── public/               # Public static files
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Header.js
│   │   │   ├── Loader.js
│   │   │   ├── Message.js
│   │   │   └── PrivateRoute.js
│   │   ├── redux/            # Redux slices and store
│   │   │   ├── slices/
│   │   │   │   ├── authSlice.js
│   │   │   │   ├── bookingSlice.js
│   │   │   │   └── serviceSlice.js
│   │   │   └── store.js
│   │   ├── screens/          # Screen/page components
│   │   │   ├── HomeScreen.js
│   │   │   ├── LoginScreen.js
│   │   │   ├── RegisterScreen.js
│   │   │   ├── DashboardScreen.js
│   │   │   └── BookingFormScreen.js
│   │   ├── App.js            # Main app component
│   │   └── index.js          # Entry point
│   └── package.json          # Frontend dependencies
└── README.md                 # Project documentation


```
---

## 🚀 Features

- User registration & login (with authentication middleware)
- Service browsing and booking
- Dashboard to manage bookings
- Role-based access (e.g., Admin features)
- State management with Redux

---

## 🛠️ Tech Stack

**Frontend**  
- React  
- Redux Toolkit  
- React Router

**Backend**  
- Node.js  
- Express.js  
- MongoDB + Mongoose

---

## ⚙️ Getting Started

### Prerequisites

- Node.js & npm
- MongoDB

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/nadunjayakody/Cleaning-Service-App.git
   cd cleaning-service-app
