import { useState } from "react";
import Blogs from "./components/Blogs";
import BookMarks from "./components/BookMarks";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Router() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const handleAddToBookmarks = (blog) => {
    if (!bookMarks.find((b) => b.id === blog.id)) {
      setBookMarks([...bookMarks, blog]);
    }
  };

  const handleReadingTime = (time) => {
    setReadingTime((prev) => prev + time);
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen ${
        isDark ? "dark" : ""
      } bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100`}
    >
      <div className="md:w-[1050px] mx-auto">
        <Nav toggleDarkMode={toggleDarkMode} isDark={isDark} />
        <div className="md:flex gap-4 mt-6">
          <Blogs
            handleAddToBookmarks={handleAddToBookmarks}
            handleReadingTime={handleReadingTime}
          />
          <BookMarks bookMarks={bookMarks} readingTime={readingTime} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
