/** eslint-disable react-refresh/only-export-components */
import { FaRegBookmark } from "react-icons/fa6";

export default function Blog({
  blog,
  handleAddToBookmarks,
  handleReadingTime,
}) {
  return (
    <div className="mb-6 bg-white dark:bg-gray-800 shadow-sm rounded-lg p-4 transition-colors duration-300">
      <img
        src={blog.cover}
        alt={`Cover image for ${blog.title}`}
        className="w-full h-48 object-cover rounded-md"
      />

      <div className="flex items-center mt-4 gap-4">
        <img
          className="w-12 h-12 rounded-full"
          src={blog.author_img}
          alt={`Author ${blog.author}`}
        />
        <div>
          <p className="text-gray-700 dark:text-gray-300 font-semibold">
            {blog.author}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {blog.posted_date}
          </p>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-3 text-gray-900 dark:text-white">
        {blog.title}
      </h2>

      <div className="flex items-center justify-between mt-2 mb-3">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {blog.reading_time} min read
        </p>
        <button
          className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          onClick={() => handleAddToBookmarks(blog)}
          aria-label="Add to bookmarks"
        >
          <FaRegBookmark size={18} />
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-1 mb-3">
        {blog.hashtags.map((hashtag, index) => (
          <span
            key={index}
            className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded"
          >
            {hashtag}
          </span>
        ))}
      </div>

      <button
        onClick={() => handleReadingTime(blog.reading_time)}
        className="text-blue-600 dark:text-blue-400 underline text-sm hover:text-blue-800 dark:hover:text-blue-200 transition"
      >
        Mark as read
      </button>
    </div>
  );
}
