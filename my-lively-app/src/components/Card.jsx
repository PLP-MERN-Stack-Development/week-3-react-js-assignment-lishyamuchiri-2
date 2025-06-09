function Card({ title, children, image }) {
  return (
    <div className="bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-blur-md rounded-2xl shadow-lg p-6 max-w-sm mx-auto transform hover:scale-105 transition-all duration-300">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-2xl mb-4"
        />
      )}
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">{title}</h2>
      <div className="text-gray-600 dark:text-gray-400">{children}</div>
    </div>
  )
}

export default Card