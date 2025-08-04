import { useLang } from "./context/LangContext";

const courses = [
  {
    title: "Kotlin Level 1",
    price: 350,
    priceBeforeDiscount: 600,
    image: "/Kotlin.png",
    message:
      "I would like to get the Kotlin Level 1 course materials , how match ?",
    topicsEn: [
      "Intro , ",
      "var and val , ",
      "Numbers , ",
      "Strings and Char , ",
      "Statements , ",
      "Arrays , ",
      "Lists , ",
      "Maps , ",
      "Loops , ",
      "fun in kotlin , ",
      "return fun .",
    ],
    topicsAr: [
      "مقدمة , ",
      "المتغيرات و الثوابت , ",
      "الأرقام , ",
      "السلاسل النصية والحروف , ",
      "العبارات , ",
      "المصفوفات , ",
      "القوائم , ",
      "الخرائط , ",
      "الحلقات , ",
      "الدوال في كوتلن , ",
      "الدالة العائدة .",
    ],
  },
  {
    title: "Kotlin Level 2",
    price: 350,
    priceBeforeDiscount: 600,
    image: "/Kotlin.png",
    message:
      "I would like to get the Kotlin Level 2 course materials , how match ?",
    topicsEn: [
      "Intro to oop , ",
      "create class and object , ",
      "create class with params , ",
      "init fun , ",
      "inherite , ",
      "super and sub class , ",
      "create objects of sub class , ",
      "Constructor , ",
      "public private protected , ",
      "Abstract , ",
      "Interface , ",
      "Data Class , ",
      "Enum Class , ",
      "Nested Class , ",
      "Review .",
    ],
    topicsAr: [
      "مقدمة إلى البرمجة الكائنية , ",
      "إنشاء فئة وكائن , ",
      "إنشاء فئة مع معلمات , ",
      "دالة الإنشاء , ",
      "الوراثة , ",
      "الفئة الرئيسية والفرعية , ",
      "إنشاء كائنات من الفئة الفرعية , ",
      "المُنشئ , ",
      "عام خاص محمي , ",
      "فئة مجردة , ",
      "واجهة , ",
      "فئة البيانات , ",
      "فئة التعداد , ",
      "فئة متداخلة , ",
      "مراجعة .",
    ],
  },
  {
    title: "Android Level 1",
    price: 500,
    priceBeforeDiscount: 900,
    image: "/android.jpg",
    message:
      "I would like to get the Android Level 1 course materials , how match ?",
    topicsEn: [
      "Intro, install android , ",
      "Build First App , ",
      "Android Studio interface , ",
      "App Files , ",
      "Gradle , ",
      "Run App , ",
      "Layouts , ",
      "Views , ",
      "Layout Atrributes , ",
      "Activity Lifecycle , ",
      "Intent , ",
      "Project Age Calculate .",
    ],
    topicsAr: [
      "مقدمة ، تثبيت أندرويد ، ",
      "إنشاء أول تطبيق ، ",
      "واجهة أندرويد ستوديو ، ",
      "ملفات التطبيق ، ",
      "تشغيل التطبيق ، ",
      "التخطيطات ، ",
      "العرض ، ",
      "سمات التخطيط ، ",
      "دورة حياة النشاط ، ",
      "النية ، ",
      "حساب عمر المشروع .",
    ],
  },
  {
    title: "Android Level 2",
    price: 500,
    priceBeforeDiscount: 900,
    image: "/android.jpg",
    message:
      "I would like to get the Android Level 2 course materials , how match ?",
    topicsEn: [
      "Screen Orientation , ",
      "onSave onRestore , ",
      "Fragments intro , ",
      "Fragment lifecycle , ",
      "Fragment Logcat , ",
      "Shared Preference , ",
      "SQLite DB , ",
      "OnCreate OnUpgrade , ",
      "SQLite functions , ",
      "Code source .",
    ],
    topicsAr: [
      "اتجاه الشاشة ، ",
      "مقدمة في الشظايا ، ",
      "دورة حياة الشظية ، ",
      "سجل الشظية ، ",
      "التفضيلات المشتركة ، ",
      "قاعدة بيانات  ",
      "وظائف ",
      "مصدر الكود .",
    ],
  },
];

export default function CoursePage() {
  const { lang } = useLang();
  const phoneNumber = "201212140220";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <p
        className="text-2xl font-bold mb-6 text-black"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        {lang === "en"
          ? "Contact me via WhatsApp to get the course download link"
          : "تواصل معي عبر واتساب للحصول على رابط تحميل الدورة"}
      </p>
      <div className="w-full bg-green-200 py-2 overflow-hidden rounded-lg mb-6">
        <p
          className="whitespace-nowrap text-center text-black font-bold animate-marquee"
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {lang === "en"
            ? "🎉 70% discount on all courses ( Price is 499EGP )"
            : "🎉 خصم 70% على جميع الدورات ( السعر 499 جنيه مصري ) 🎉"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center mb-4 gap-3">
                <div className="w-28 h-24 rounded-xl overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                </div>
              </div>

              <p
                className="text-gray-800 font-semibold mb-2"
                dir={lang === "ar" ? "rtl" : "ltr"}
              >
                {lang === "en" ? "Course Topics:" : "مواضيع الكورس : "}
              </p>
              <p
                className="text-gray-800 font-semibold mb-2"
                dir={lang === "ar" ? "rtl" : "ltr"}
              >
                {lang === "en" ? course.topicsEn : course.topicsAr}
              </p>
            </div>

            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                course.message
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              {lang === "en" ? "WhatsApp Me" : "تواصل معي عبر واتساب"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
