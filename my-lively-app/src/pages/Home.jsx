import Button from '../components/Button'
import Card from '../components/Card'

function Home() {
  return (
    <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Welcome to PLP Task Manager!</h1>
      <div className="flex justify-center space-x-4 mb-8">
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Learn More</Button>
        <Button variant="danger">Contact Us</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Manage Tasks" image="https://images.unsplash.com/photo-1743385779347-1549dabf1320?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JnYW5pemUlMjB0YXNrcyUyMGltYWdlfGVufDB8fDB8fHww">
          Organize your tasks with ease and style!
        </Card>
        <Card title="Modern Design" image="https://images.unsplash.com/photo-1542395765-761de4ee9696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJ1aWx0JTIwd2l0aCUyMFJlYWN0JTJDJTIwSlNYJTJDJTIwYW5kJTIwVGFpbHdpbmQlMjBDU1MlMjBmb3IlMjBhJTIwdmlicmFudCUyMGV4cGVyaWVuY2UufGVufDB8fDB8fHww">
          Built with React, JSX, and Tailwind CSS for a vibrant experience.
        </Card>
        <Card title="Stay Productive" image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e">
          Track your progress with our Task Manager.
        </Card>
      </div>
    </main>
  )
}

export default Home