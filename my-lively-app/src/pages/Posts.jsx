import { useState, useEffect } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'

function Posts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const postsPerPage = 10

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setPosts(data)
      } catch (err) {
        setError('Failed to fetch posts')
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  )

  const paginatedPosts = filteredPosts.slice((page - 1) * postsPerPage, page * postsPerPage)

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  return (
    <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Posts</h1>
      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search posts..."
          className="w-full max-w-md mx-auto p-2 rounded-full border-none focus:outline-none text-gray-800 dark:text-gray-200 dark:bg-gray-700"
        />
      </div>
      {loading && <p className="text-center text-gray-500 dark:text-gray-400">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPosts.map((post) => (
          <Card key={post.id} title={post.title}>
            <p className="text-gray-600 dark:text-gray-400">{post.body}</p>
          </Card>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-6">
        <Button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          variant="secondary"
        >
          Previous
        </Button>
        <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Page {page} of {totalPages}
        </span>
        <Button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          variant="secondary"
        >
          Next
        </Button>
      </div>
    </main>
  )
}

export default Posts