import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TaskManager from './pages/TaskManager'
import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'
import Login from './pages/Login'
import Register from './pages/Register'
import './index.css'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App