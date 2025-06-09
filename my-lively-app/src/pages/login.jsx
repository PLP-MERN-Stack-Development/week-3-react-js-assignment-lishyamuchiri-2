import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { useTheme } from '../context/ThemeContext'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find((u) => u.email === email && u.password === password)
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user))
      setError('')
      navigate('/tasks')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <div className="bg-white bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-xl p-8 max-w-md w-full animate-fade-in">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Login</h1>
        <div className="flex justify-center mb-6">
          <Button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 rounded-full bg-white bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-50 border-none focus:outline-none text-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 rounded-full bg-white bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-50 border-none focus:outline-none text-gray-900 dark:text-gray-100"
            />
          </div>
          <Button type="submit" variant="primary" className="w-full">
            Login
          </Button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <a href="/register" className="text-pink-300 hover:underline">
              Register
            </a>
          </p>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-2">Or login with</p>
          <div className="flex justify-center space-x-4">
            <Button variant="secondary" className="px-4 py-2">
              Google
            </Button>
            <Button variant="secondary" className="px-4 py-2">
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login