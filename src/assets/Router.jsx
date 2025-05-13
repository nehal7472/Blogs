import { useState } from "react";
import Blogs from "./components/Blogs";
import BookMarks from "./components/BookMarks";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Router() {
  const [bookMarks, setBookMarks] = useState([]);

  const handleAddToBookmarks = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };

  return (
    <>
      <div className="w-[960px] mx-auto">
        <Nav />
        <div className="md:flex gap-4 mt-6">
          <Blogs handleAddToBookmarks={handleAddToBookmarks} />
          <BookMarks bookMarks={bookMarks} />
        </div>
      </div>
      <Footer />
    </>
  );
}
