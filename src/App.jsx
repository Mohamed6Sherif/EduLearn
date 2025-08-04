import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CoursePage from "./CoursePage";
import BookingPage from "./BookingPage";
import HomePage from "./HomePage";
import { LangProvider } from "./context/LangContext";
import Navbar from "./Navbar";

export default function App() {
  return (
    <LangProvider>
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
    </LangProvider>
  );
}
