import { useState, useEffect } from 'react'
import useLocalStorage from '../utils/useLocalStorage'
import Button from '../components/Button'
import Card from '../components/Card'
import { useTheme } from '../context/ThemeContext'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('all')
  const { theme, toggleTheme } = useTheme()

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  useEffect(() => {
    // Theme is managed by ThemeContext, no need to toggle here
  }, [theme])

  const chartData = {
    labels: ['All', 'Active', 'Completed'],
    datasets: [{
      label: 'Task Counts',
      data: [
        tasks.length,
        tasks.filter(t => !t.completed).length,
        tasks.filter(t => t.completed).length
      ],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(239, 68, 68, 0.8)'
      ],
      borderColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(239, 68, 68)'
      ],
      borderWidth: 1
    }]
  }

  return (
    <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Task Manager</h1>
      <div className="flex justify-center mb-6">
        <Button onClick={toggleTheme} variant="secondary">
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </div>
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 max-w-md mx-auto">
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="flex-grow p-2 rounded-l-full border-none focus:outline-none text-gray-900 dark:text-gray-100 dark:bg-gray-700"
          />
          <Button onClick={addTask} variant="primary">
            Add
          </Button>
        </div>
        <div className="flex justify-center space-x-4 mb-6">
          <Button onClick={() => setFilter('all')} variant={filter === 'all' ? 'primary' : 'secondary'}>
            All
          </Button>
          <Button onClick={() => setFilter('active')} variant={filter === 'active' ? 'primary' : 'secondary'}>
            Active
          </Button>
          <Button onClick={() => setFilter('completed')} variant={filter === 'completed' ? 'primary' : 'secondary'}>
            Completed
          </Button>
        </div>
        <div className="space-y-4">
          {filteredTasks.map((task) => (
            <Card key={task.id} title={task.text}>
              <div className="flex justify-between items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="h-5 w-5"
                />
                <Button variant="danger" onClick={() => deleteTask(task.id)}>
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Task Statistics</h2>
          <Bar
            data={chartData}
            options={{
              scales: {
                y: { beginAtZero: true, title: { display: true, text: 'Number of Tasks' } },
                x: { title: { display: true, text: 'Task Status' } }
              },
              plugins: { legend: { display: false } }
            }}
          />
        </div>
      </div>
    </main>
  )
}

export default TaskManager