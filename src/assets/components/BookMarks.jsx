import BookMark from "./BookMark";

export default function BookMarks({ bookMarks }) {
  return (
    <div className="md:w-1/3 bg-gray-300 p-2">
      <h2 className="text-2xl font-bold text-white py-3 bg-blue-900 mb-2 text-center">
        Bookmarked Blogs : {bookMarks.length}
      </h2>
      {bookMarks.map((item) => (
        <div key={item.id}>
          <BookMark item={item} />
        </div>
      ))}
    </div>
  );
}
