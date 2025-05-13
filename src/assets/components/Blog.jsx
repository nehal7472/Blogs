/* eslint-disable react-refresh/only-export-components */
import { FaRegBookmark } from "react-icons/fa6";
export default function ({ blog, handleAddToBookmarks }) {
  return (
    <div className="mb-4 ">
      <img
        src={blog.cover}
        alt={blog.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="flex items-center mt-4 gap-4">
        <img
          className="w-[50px] rounded-full"
          src={blog.author_img}
          alt={blog.title}
        />
        <div>
          <p className="text-gray-600">{blog.author}</p>
          <p className="text-gray-500">{blog.posted_date}</p>
        </div>
      </div>
      <h2 className="text-xl font-bold mt-2">{blog.title}</h2>
      <div className="flex items-center gap-6 mt-2 mb-4">
        <p className="text-gray-500">{blog.reading_time}</p>

        <FaRegBookmark onClick={() => handleAddToBookmarks(blog)} />
      </div>
      <div className="flex space-x-2  ">
        {blog.hashtags.map((hashtag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded "
          >
            {hashtag}
          </span>
        ))}
      </div>
      <div className="mb-8 mt-2 underline text-blue-800">
        <a href="">mark as read</a>
      </div>
    </div>
  );
}
