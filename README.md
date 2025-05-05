# Cleaning Service App 🧼

A full-stack web application for booking and managing cleaning services. Built with Node.js, Express, MongoDB (Backend) and React, Redux (Frontend).

---

## 📁 Project Structure

cleaning-service-app/
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Service.js
│   │   └── Booking.js
│   ├── routes/
│   │   ├── users.js
│   │   ├── services.js
│   │   └── bookings.js
│   ├── seeder.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Loader.js
│   │   │   ├── Message.js
│   │   │   └── PrivateRoute.js
│   │   ├── redux/
│   │   │   ├── slices/
│   │   │   │   ├── authSlice.js
│   │   │   │   ├── bookingSlice.js
│   │   │   │   └── serviceSlice.js
│   │   │   └── store.js
│   │   ├── screens/
│   │   │   ├── HomeScreen.js
│   │   │   ├── LoginScreen.js
│   │   │   ├── RegisterScreen.js
│   │   │   ├── DashboardScreen.js
│   │   │   └── BookingFormScreen.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md



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
