export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-10 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome to EduLearn 📚
      </h1>

      <p className="text-lg text-gray-700 max-w-2xl mb-6">
        At EduLearn, we’ve been empowering students for over{" "}
        <strong>5 years</strong> with high-quality courses in{" "}
        <strong>Computer Fundamentals</strong> and <strong>Programming</strong>{" "}
        for both <strong>kids</strong> and <strong>adults</strong>. Whether
        you're just starting or looking to sharpen your skills — we've got you
        covered!
      </p>

      <p className="text-lg text-gray-700 mb-6">
        Our goal is to make tech education simple, fun, and accessible to
        everyone. 🚀
      </p>

      <div className="flex gap-4 mb-10">
        <a
          href="https://wa.me/201212140220"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
        >
          Chat with us on WhatsApp
        </a>

        <a
          href="https://www.youtube.com/@BinaryTech-M"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition"
        >
          Visit our YouTube Channel
        </a>
      </div>

      {/* Footer */}
      <footer className="w-full border-t pt-6 mt-auto text-sm text-gray-600">
        <div className="flex items-center justify-center gap-4 flex-col sm:flex-row text-center sm:text-left">
          {/* صورتك */}
          <img
            src="../src/assets/me.jpg"
            alt="Mohamed Sherif"
            className="w-20 h-20 rounded-full border-2 border-gray-300"
          />

          {/* معلوماتك */}
          <div>
            <p className="mb-1 font-medium">
              Mohamed Sherif — Instructor & Founder
            </p>
            <p className="mb-1">Experience: 5+ years in Tech Education</p>
            <p className="mb-1">
              Phone:{" "}
              <a
                href="tel:+201212140220"
                className="text-blue-600 hover:underline"
              >
                +20 121 214 0220
              </a>
            </p>
            <p>
              YouTube:{" "}
              <a
                href="https://www.youtube.com/@BinaryTech-M"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                BinaryTech Channel
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
