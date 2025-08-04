import { useLang } from "./context/LangContext";

const courses = [
  {
    title: "Kotlin Level 1",
    price: 350,
    priceBeforeDiscount: 600,
    image: "/Kotlin.png",
    message: "I would like to book the Kotlin Level 1 course.",
    topicsEn: [
      "Intro",
      "var and val",
      "Numbers",
      "Strings and Char",
      "Statements",
      "Arrays",
      "Lists",
      "Maps",
      "Loops",
      "fun in kotlin",
      "return fun",
    ],
    topicsAr: [
      "مقدمة",
      "المتغيرات و الثوابت",
      "الأرقام",
      "السلاسل النصية والحروف",
      "العبارات",
      "المصفوفات",
      "القوائم",
      "الخرائط",
      "الحلقات",
      "الدوال في كوتلن",
      "الدالة العائدة",
    ],
  },
  {
    title: "Kotlin Level 2",
    price: 350,
    priceBeforeDiscount: 600,
    image: "/Kotlin.png",
    message: "I would like to book the Kotlin Level 2 course.",
    topicsEn: [
      "Intro to oop",
      "create class and object",
      "create class with params",
      "init fun",
      "inherite",
      "super and sub class",
      "create objects of sub class",
      "Constructor",
      "public private protected",
      "Abstract",
      "Interface",
      "Data Class",
      "Enum Class",
      "Nested Class",
      "Review",
    ],
    topicsAr: [
      "مقدمة إلى البرمجة الكائنية",
      "إنشاء فئة وكائن",
      "إنشاء فئة مع معلمات",
      "دالة الإنشاء",
      "الوراثة",
      "الفئة الرئيسية والفرعية",
      "إنشاء كائنات من الفئة الفرعية",
      "المُنشئ",
      "عام خاص محمي",
      "فئة مجردة",
      "واجهة",
      "فئة البيانات",
      "فئة التعداد",
      "فئة متداخلة",
      "مراجعة",
    ],
  },
  {
    title: "Android Level 1",
    price: 500,
    priceBeforeDiscount: 900,
    image: "/android.jpg",
    message: "I would like to book the Android Level 1 course.",
    topicsEn: [
      "Intro, install android",
      "Build First App",
      "Android Studio interface",
      "App Files",
      "Gradle",
      "Run App",
      "Layouts",
      "Views",
      "Layout Atrributes",
      "Activity Lifecycle",
      "Intent",
      "Project Age Calculate",
    ],
    topicsAr: [
      "مقدمة ، تثبيت أندرويد",
      "إنشاء أول تطبيق",
      "واجهة أندرويد ستوديو",
      "ملفات التطبيق",
      "تشغيل التطبيق",
      "التخطيطات",
      "العرض",
      "سمات التخطيط",
      "دورة حياة النشاط",
      "النية",
      "حساب عمر المشروع",
    ],
  },
  {
    title: "Android Level 2",
    price: 500,
    priceBeforeDiscount: 900,
    image: "/android.jpg",
    message: "I would like to book the Android Level 2 course.",
    topicsEn: [
      "Screen Orientation",
      "onSave onRestore",
      "Fragments intro",
      "Fragment lifecycle",
      "Fragment Logcat",
      "Shared Preference",
      "SQLite DB",
      "OnCreate OnUpgrade",
      "SQLite functions",
      "Code source",
    ],
    topicsAr: [
      "اتجاه الشاشة",
      "مقدمة في الشظايا",
      "دورة حياة الشظية",
      "سجل الشظية",
      "التفضيلات المشتركة",
      "قاعدة بيانات",
      "إنشاء قاعدة البيانات وتحديثها",
      "وظائف قاعدة البيانات",
      "مصدر الكود",
    ],
  },
  {
    title: "English Language Level 1",
    price: 400,
    priceBeforeDiscount: 700,
    image: "/english.png",
    message: "I would like to book the English Language Level 1 course.",
    topicsEn: [
      "Introduction",
      "Letters and their sounds",
      "Vowels",
      "Consonants",
      "Compound letters",
      "Exercises on word reading",
      "Subject in a sentence",
      "Regular verb",
      "Irregular verb",
      "Exercises on subject and regular/irregular verbs",
      "Verb 'to be' in present",
      "Verb 'to be' in past",
      "Exercises on verb 'to be' in present and past",
      "Verb 'to have'",
      "Object in the sentence",
      "Demonstrative pronouns",
      "Expressing possession",
      "Reflexive pronouns",
      "Indefinite and definite articles",
      "Singular and plural",
      "Comprehensive exercises",
    ],
    topicsAr: [
      "المقدمة",
      "الحروف و الصوت الخاص بها",
      "الحروف المتحركه",
      "الحروف الصامته",
      "الحروف المركبة",
      "تمارين على قراءة الكلمات",
      "الفاعل في الجملة",
      "الفعل المنتظم",
      "الفعل غير المنتظم",
      "تمارين على الفاعل و الفعل المنتظم وغير المنتظم",
      "الفعل (يكون) في المضارع",
      "الفعل (يكون) في الماضي",
      "تمارين على الفعل (يكون) في المضارع و الماضي",
      "الفعل (يملك)",
      "المفعول به في الجملة",
      "أسماء الأشارة",
      "التعبير عن الملكية",
      "الضمائر المنعكسة",
      "أدوات النكرة و المعرفة",
      "المفرد و الجمع",
      "تمارين شامله",
    ],
  },
  {
    title: "Computer Basics Course",
    price: 400,
    priceBeforeDiscount: 700,
    image: "/computer.png",
    message: "I would like to book the Computer Basics course.",
    topicsEn: [
      "External components of the computer",
      "Operating system",
      "Working with the desktop",
      "Files",
      "Folders",
      "Copy and paste",
      "Internet browsing",
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
    ],
    topicsAr: [
      "مكونات الكمبيوتر من الخارج",
      "نظام التشغيل",
      "التعامل مع سطح المكتب",
      "الملفات",
      "المجلدات",
      "النسخ واللصق",
      "البحث في الانترنت",
      "برنامج الوورد",
      "برنامج الاكسيل",
      "برنامج البوربوينت",
    ],
  },
];

export default function BookingPage() {
  const { lang } = useLang();
  const phoneNumber = "201212140220";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h2
        className="text-2xl font-bold mb-6"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        {lang === "en"
          ? "Book Your Course via WhatsApp"
          : "احجز دورتك عبر واتساب"}
      </h2>
      <div className="w-full bg-green-200 py-2 overflow-hidden rounded-lg mb-6">
        <p
          className="whitespace-nowrap text-center text-black font-bold animate-marquee"
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {lang === "en"
            ? "🎉 40% discount on all courses ( Book Now ) 🎉"
            : "🎉 خصم 40% على جميع الدورات ( إلحق إحجز ) 🎉"}
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
                <div className="w-20 h-20 rounded-xl overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p
                    className="text-gray-700 mb-4"
                    dir={lang === "ar" ? "rtl" : "ltr"}
                  >
                    {lang === "en" ? "Price: " : "السعر: "}
                    <del
                      className="text-red-400"
                      dir={lang === "ar" ? "rtl" : "ltr"}
                    >
                      {course.priceBeforeDiscount}
                    </del>{" "}
                    <span
                      className="text-green-600 font-bold"
                      dir={lang === "ar" ? "rtl" : "ltr"}
                    >
                      {lang === "en"
                        ? course.price + "EGP"
                        : course.price + " جنيه مصري"}
                    </span>
                  </p>
                </div>
              </div>

              <p
                className="text-gray-800 font-semibold mb-2"
                dir={lang === "ar" ? "rtl" : "ltr"}
              >
                {lang === "en" ? "Course Topics:" : "مواضيع الكورس : "}
              </p>
              <ul
                className="list-disc list-inside text-sm text-gray-700 space-y-1 max-h-40 overflow-y-auto"
                dir={lang === "ar" ? "rtl" : "ltr"}
              >
                {lang === "en"
                  ? course.topicsEn.map((topic, i) => <li key={i}>{topic}</li>)
                  : course.topicsAr.map((topic, i) => <li key={i}>{topic}</li>)}
              </ul>
            </div>

            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                course.message
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              dir={lang === "ar" ? "rtl" : "ltr"}
              className="text-center mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              {lang === "en" ? "Book on WhatsApp" : "احجز عبر واتساب"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
