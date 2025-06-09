import { NavLink } from 'react-router-dom'

function Navbar({ links = [
  { to: '/', label: 'Home' },
  { to: '/tasks', label: 'Tasks' },
  { to: '/posts', label: 'Posts' },
  { to: '/about', label: 'About' },
  { to: '/login', label: 'Login' },
  { to: '/register', label: 'Register' }
] }) {
  return (
    <nav className="p-4 bg-white dark:bg-gray-800 shadow sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">PLP Task Manager</div>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `hover:text-pink-300 font-semibold transition-colors duration-300 ${
                    isActive ? 'text-pink-300 underline' : 'text-gray-900 dark:text-gray-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar