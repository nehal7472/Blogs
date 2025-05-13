import BookMark from "./BookMark";

export default function BookMarks({ bookMarks, readingTime }) {
  return (
    <div className="w-full md:w-1/3 px-4">
      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
        {/* Reading Time Display */}
        <div className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-center font-semibold py-2 rounded mb-4">
          Reading Time: {readingTime} min read
        </div>

        {/* Bookmarks Header */}
        <h2 className="text-xl font-bold text-center text-white bg-blue-700 dark:bg-blue-800 py-3 rounded">
          Bookmarked Blogs: {bookMarks.length}
        </h2>

        {/* Bookmark List */}
        <div className="mt-4 space-y-2 max-h-[500px] overflow-y-auto pr-1">
          {bookMarks.map((item) => (
            <div key={item.id}>
              <BookMark item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
