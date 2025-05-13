import Blogs from "./components/Blogs";
import BookMarks from "./components/BookMarks";
import Nav from "./components/Nav";

export default function Router() {
  return (
    <>
      <div className="w-[960px] mx-auto">
        <Nav />
        <div className="md:flex gap-4 mt-6">
          <Blogs />
          <BookMarks />
        </div>
      </div>
    </>
  );
}
