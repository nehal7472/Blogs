import React, { useState, useEffect } from "react";
import Blog from "./Blog";

export default function Blogs({ handleAddToBookmarks, handleReadingTime }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("blogs.js")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full md:w-2/3 px-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Latest Blog Posts
      </h2>

      {loading ? (
        <p className="text-gray-600 dark:text-gray-400">Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p className="text-red-500 dark:text-red-400">No blogs available.</p>
      ) : (
        blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleAddToBookmarks={handleAddToBookmarks}
            handleReadingTime={handleReadingTime}
          />
        ))
      )}
    </div>
  );
}
