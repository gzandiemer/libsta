<p align="right">
  <img src="../master/frontend/src/assets/logo-books.png" width="250" alt="Libsta Logo">
</p>

# Libsta | Book Sharing App

A full-stack web application that enables members to create personal libraries, share books, and connect with other readers.  

---

## Table of Contents
- [About the Project](#about-the-project)
  - [Vision](#vision)
  - [Goals](#goals)
  - [Context](#context)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Status](#status)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## About the Project

### Vision
Berlin’s libraries often lack books in diverse languages. **Libsta** was created as a community-driven alternative: a digital space where people can connect their personal libraries, exchange books, and meet others with similar tastes.  

### Goals
- Registration-based membership system  
- Personal library pages for each member  
- Book search by title or author  
- Social features: follow, like, comment (with spoiler alerts)  
- Direct messaging to arrange exchanges  

### Context
This project was developed within the **Women Techmakers Berlin JavaScript Crash Course 2019 at Wayfair**.  

---

## Features
- Authentication & profile management  
- Create and manage personal book libraries  
- Search functionality  
- Likes, comments, and follows  
- Spoiler protection in comment sections  
- Direct messaging between members  

---

## Tech Stack
- **Frontend**: Vue.js  
- **Backend**: Node.js, Express  
- **Database**: MongoDB with Mongoose  
- **Other**: Axios (HTTP requests), Pug (templates), ESLint (code styling), Ava (testing)  

---

## Getting Started

### Prerequisites
- Node.js (>= v8.11)  
- NPM (>= v6)  
- MongoDB (>= v4.2)  
- Docker (>= v19.03.2) – optional for containerization  
- Robo3T – optional for DB GUI  

### Installation
```bash
# Clone repository
git clone <repo-url>
cd libsta

# Install dependencies
npm install

# Start backend
nodemon index.js

# Start frontend
npm run serve

## Usage
- Run npm run serve for frontend development
- Run npm run build for production build
- Connect to MongoDB with brew services start mongodb-community@4.2
- Run tests with npm run test

## Project Structure
├───backend
│   ├───models
│   ├───routes
│   ├───services
│   ├───test
│   └───views
└───frontend
    ├───public
    └───src
        ├───assets
        ├───axios-auth
        ├───components
        │   └───forms
        ├───data
        ├───router
        ├───store
        └───views

## Status
- ✅ Authentication basics
- ✅ Library management (add books, like, comment)
- ✅ Routing & navigation
- ✅ Initial tests

## Future Improvements
- Enhanced authentication & validation
- Direct messaging between users
- Advanced search and filtering
- Profile customization (follows, favorites, etc.)
- Carousel views for featured books
- UI polish (icons, styles, responsive layouts)

## Licence
MIT License





