import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CoursePage from "./CoursePage";
import BookingPage from "./BookingPage";
import HomePage from "./HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/book" element={<BookingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow bg-white">
      <div className="text-xl font-bold">
        <Link to="/">EduLearn</Link>
      </div>
      <ul className="flex gap-6 text-sm font-medium text-gray-700">
        <li>
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/courses" className="hover:text-blue-600">
            Courses
          </Link>
        </li>
        <li>
          <Link to="/book" className="hover:text-blue-600">
            Book Course
          </Link>
        </li>
      </ul>
      <div className="w-9 h-9 rounded-full overflow-hidden border">
        <img
          src="/logo.jpg"
          alt="user"
          className="w-full h-full object-cover"
        />
      </div>
    </nav>
  );
}
