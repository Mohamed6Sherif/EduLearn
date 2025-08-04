import { Link, useLocation } from "react-router-dom";
import { useLang } from "./context/LangContext";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const location = useLocation(); // لمعرفة الصفحة الحالية

  const isActive = (path) =>
    location.pathname === path
      ? "bg-blue-100 text-blue-600 rounded px-2 py-1"
      : "hover:text-blue-600 px-2 py-1";

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow bg-white">
      <div className="text-xl font-bold">
        <Link to="/">
          <div className="w-9 h-9 rounded-full overflow-hidden border">
            <img
              src="/logo.jpg"
              alt="user"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>
      <ul className="flex gap-2 text-sm font-medium text-gray-700">
        <li>
          <Link to="/" className={isActive("/")}>
            {lang === "en" ? "Home" : "الرئيسية"}
          </Link>
        </li>
        <li>
          <Link to="/courses" className={isActive("/courses")}>
            {lang === "en" ? "Courses" : "الكورسات"}
          </Link>
        </li>
        <li>
          <Link to="/book" className={isActive("/book")}>
            {lang === "en" ? "Book" : "الحجز"}
          </Link>
        </li>
      </ul>
      <button
        onClick={() => setLang(lang === "en" ? "ar" : "en")}
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {lang === "en" ? "Ar 🌐" : "En 🌐"}
      </button>
    </nav>
  );
}
