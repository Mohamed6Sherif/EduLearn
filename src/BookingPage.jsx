const courses = [
  {
    title: "Kotlin Level 1",
    price: 350,
    priceBeforeDiscount: 600,
    image: "/Kotlin.png",
    message: "I would like to book the Kotlin Level 1 course.",
    topics: [
      "Intro",
      "var and val",
      "Numbers",
      "Numbers p2",
      "Strings and Char",
      "Edit Strings",
      "String trimMargin",
      "Boolean and If Statement",
      "If, else if statement",
      "When statement",
      "Arrays",
      "Lists",
      "Maps",
      "For loop",
      "While loop",
      "do while loop",
      "fun in kotlin",
      "return fun",
    ],
  },
  {
    title: "Kotlin Level 2",
    price: 350,
    priceBeforeDiscount: 600,
    image: "/Kotlin.png",
    message: "I would like to book the Kotlin Level 2 course.",
    topics: [
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
      "Enum Class p1",
      "Enum Class p2",
      "Nested Class",
      "Review",
    ],
  },
  {
    title: "Android Level 1",
    price: 500,
    priceBeforeDiscount: 900,
    image: "/android.jpg",
    message: "I would like to book the Android Level 1 course.",
    topics: [
      "Intro, install android",
      "Build First App",
      "Android Studio interface",
      "App Files",
      "Gradle",
      "Run App",
      "Layouts",
      "Add View at layout",
      "Layout Atrributes",
      "Activity Lifecycle",
      "Intent part1",
      "Intent part2",
      "Explicit intent",
      "Implicit intent",
      "Project1 Age Calculate",
    ],
  },
  {
    title: "Android Level 2",
    price: 500,
    priceBeforeDiscount: 900,
    image: "/android.jpg",
    message: "I would like to book the Android Level 2 course.",
    topics: [
      "Screen Orientation",
      "onSave onRestore",
      "Fragments intro",
      "Fragment lifecycle",
      "Fragment Logcat",
      "Shared Preference",
      "SQLite DB",
      "OnCreate OnUpgrade",
      "SQLite insert, show, delete",
      "Code For SQLite Video.pdf",
    ],
  },
];

export default function BookingPage() {
  const phoneNumber = "201212140220";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold mb-6">Book Your Course via WhatsApp</h2>

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
                  <p className="text-gray-700 mb-4">
                    Price:{" "}
                    <del className="text-red-400">
                      {course.priceBeforeDiscount}
                    </del>{" "}
                    <span className="text-green-600 font-bold">
                      {course.price} EGP
                    </span>
                  </p>
                </div>
              </div>

              <p className="text-gray-800 font-semibold mb-2">Course Topics:</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 max-h-40 overflow-y-auto">
                {course.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>

            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                course.message
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Book on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
