export default function BookMark({ item }) {
  const { title, author, author_img, reading_time, hashtags } = item;

  return (
    <div className="mb-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm transition-all">
      {/* Author Info */}
      <div className="flex items-center gap-4 mb-2">
        <img
          className="w-[50px] h-[50px] object-cover rounded-full"
          src={author_img}
          alt={`Author: ${author}`}
        />
        <div>
          <p className="text-gray-800 dark:text-gray-200 font-semibold">
            {author}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {reading_time} min read
          </p>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h2>

      {/* Hashtags */}
      <div className="flex flex-wrap gap-2">
        {hashtags.map((hashtag, index) => (
          <span
            key={index}
            className="bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-100 text-xs font-medium px-2.5 py-0.5 rounded"
          >
            {hashtag}
          </span>
        ))}
      </div>
    </div>
  );
}
