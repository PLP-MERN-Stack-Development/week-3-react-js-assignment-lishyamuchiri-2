function Footer({ links = [
  { to: '/', label: 'Home' },
  { to: '/tasks', label: 'Tasks' },
  { to: '/posts', label: 'Posts' },
  { to: '/about', label: 'About' },
  { to: '/login', label: 'Login' },
  { to: '/register', label: 'Register' }
], copyright = `© ${new Date().getFullYear()} PLP Task Manager` }) {
  return (
    <footer className="p-6 bg-white dark:bg-gray-800 shadow mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center max-w-7xl">
        <div className="mb-4 md:mb-0 text-gray-500 dark:text-gray-400">{copyright}</div>
        <ul className="flex space-x-4">
          {links.map((link) => (
            <li key={link.to}>
              <a href={link.to} className="text-gray-500 dark:text-gray-400 hover:text-pink-300 transition-colors duration-300">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer