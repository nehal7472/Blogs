export default function BookMark({ item }) {
  const { title, author, author_img, reading_time, hashtags } = item;
  return (
    <>
      <div className="mb-4 bg-gray-50 p-4 rounded-lg shadow-md overflow-hidden">
        <div className="flex items-center mt-4 gap-4">
          <img className="w-[50px] rounded-full" src={author_img} alt={title} />
          <div>
            <p className="text-gray-600">{author}</p>
            <p className="text-gray-500">{reading_time}</p>
          </div>
        </div>
        <h2 className="text-xl font-bold mt-2">{title}</h2>
        <div className="flex items-center gap-6 mt-2 mb-4">
          <p className="text-gray-500">{reading_time}</p>
        </div>
        <div className="flex space-x-2 ">
          {hashtags.map((hashtag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {hashtag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
