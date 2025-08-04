import { useLang } from "./context/LangContext";

export default function HomePage() {
  const { lang } = useLang();
  return (
    <div className="min-h-screen bg-gray-50 p-10 flex flex-col items-center text-center">
      <h1
        className="text-3xl font-bold text-gray-800 mb-4"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        {lang === "en" ? "Welcome to EduLearn 📚" : " مرحبًا بكم 📚"}
      </h1>

      <p
        className="text-lg text-gray-700 max-w-2xl mb-6"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        {lang === "en"
          ? "At EduLearn, we’ve been empowering students for over 5 years with high-quality courses in Computer Fundamentals and Programming for both kids and adults. Whether you're just starting or looking to sharpen your skills — we've got you covered!"
          : "نحن نعمل على تمكين الطلاب منذ أكثر من 5 سنوات من خلال دورات عالية الجودة في أساسيات الكمبيوتر والبرمجة للأطفال والكبار. سواء كنت مبتدئًا أو تبحث عن تحسين مهاراتك - نحن هنا لمساعدتك!"}
      </p>

      <p
        className="text-lg text-gray-700 mb-6"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        {lang === "en"
          ? "Our courses are designed to be engaging, practical, and accessible for everyone. From basic computer skills to advanced programming languages, we make learning fun and effective. 🚀"
          : "🚀 هدفنا هو جعل التعليم التكنولوجي بسيطًا وممتعًا وفي متناول الجميع"}
      </p>

      <div className="flex gap-4 mb-10" dir={lang === "ar" ? "rtl" : "ltr"}>
        <a
          href="https://wa.me/201212140220"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
        >
          {lang === "en" ? "Chat with us on WhatsApp" : "تحدث معنا على واتساب"}
        </a>

        <a
          href="https://www.youtube.com/@BinaryTech-M"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition"
        >
          {lang === "en"
            ? "Visit our YouTube Channel"
            : "زيارة قناتنا على يوتيوب"}
        </a>
      </div>

      {/* Footer */}
      <footer className="w-full border-t pt-6 mt-auto text-sm text-gray-600">
        <div className="flex items-center justify-center gap-4 flex-col sm:flex-row text-center sm:text-left">
          {/* صورتك */}
          <img
            src="/me.jpg"
            alt="Mohamed Sherif"
            className="w-20 h-20 rounded-full border-2 border-gray-300"
          />

          {/* معلوماتك */}
          <div dir={lang === "ar" ? "rtl" : "ltr"}>
            <p className="mb-1 font-medium">
              {lang === "en"
                ? "Mohamed Sherif — Instructor & Founder"
                : "محمد شريف — المدرب والمؤسس"}
            </p>
            <p className="mb-1">
              {lang === "en"
                ? "Expert in Computer Fundamentals & Programming"
                : "خبير في أساسيات الكمبيوتر والبرمجة"}
            </p>
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
