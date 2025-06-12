PLP Task Manager
A responsive React application built with Vite, Tailwind CSS, and React Router for the Week 3 bootcamp project. This task manager allows users to manage tasks, view posts from an API, and authenticate with modern login/register pages, all with a customizable light/dark mode theme.
Setup
Prerequisites

Node.js (v18 or higher)
npm (comes with Node.js)

Installation

Clone the repository:git clone 




Install dependencies:npm install


Start the development server:npm run dev

Open http://localhost:5173 (or the port displayed in the terminal) in your browser.

Features

Reusable Components: Button, Card, Navbar, Footer, and Layout for a consistent UI.
Task Management: Add, complete, delete, and filter tasks with local storage persistence.
API Integration: Fetch and display posts from JSONPlaceholder with pagination and search.
Authentication: Modern login and register pages with client-side validation and localStorage-based user management.
Theme Switcher: Toggle between light and dark modes using Tailwind CSS's dark mode feature.
Responsive Design: Optimized for mobile, tablet, and desktop with Tailwind CSS.
Visualizations: Task statistics chart using Chart.js.

Usage

Navigate using the Navbar to Home, Tasks, Posts, About, Login, and Register pages.
Add tasks on the Tasks page and switch themes with the button.
Search and paginate posts on the Posts page.
Register a new user or log in to access protected features (simulated with localStorage).

Project Structure
week-3-react-js/
├── public/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── TaskManager.jsx
│   │   ├── Posts.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   ├── context/
│   │   ├── ThemeContext.jsx
│   ├── utils/
│   │   ├── useLocalStorage.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── screenshots/
├── README.md
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── index.html

## 📸 Screenshots

### 🏠 Home Page  
![Home Page](./Screenshots/Screenshot%202025-06-11%20083446.png)

### 📋 Task Manager  
![Task Manager](./Screenshots/Screenshot%202025-06-12%20080546.png)

### 📝 Posts Page  
![Posts Page](./Screenshots/Screenshot%202025-06-12%20081800.png)

### 🔐 Login Page  
![Login Page](./Screenshots/Screenshot%202025-06-12%20081821.png)

### 🆕 Register Page  
![Register Page](./Screenshots/Screenshot%202025-06-12%20081842.png)



Deployment

Install Vercel CLI globally:npm i -g vercel


Deploy the project:vercel


Deployed URL
PLP Task Manager
Contributing
This project is part of a bootcamp assignment. For contributions, please fork the repository and submit a pull request with your changes.
License
This project is for educational purposes only and does not have a formal license.
Acknowledgments


Uses Tailwind CSS, React Router, and Chart.js for a modern frontend experience.
API data from JSONPlaceholder.

