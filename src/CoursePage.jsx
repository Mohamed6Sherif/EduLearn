const courses = [
  {
    title: "Kotlin Level 1",
    price: 350,
    priceBeforeDiscount: 600,
    image: "/Kotlin.png",
    message:
      "I would like to get the Kotlin Level 1 course materials , how match ?",
    topics: [
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
  },
  {
    title: "Kotlin Level 2",
    price: 350,
    priceBeforeDiscount: 600,
    image: "/Kotlin.png",
    message:
      "I would like to get the Kotlin Level 2 course materials , how match ?",
    topics: [
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
      "Enum Class p1 , ",
      "Enum Class p2 , ",
      "Nested Class , ",
      "Review .",
    ],
  },
  {
    title: "Android Level 1",
    price: 500,
    priceBeforeDiscount: 900,
    image: "/android.jpg",
    message:
      "I would like to get the Android Level 1 course materials , how match ?",
    topics: [
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
  },
  {
    title: "Android Level 2",
    price: 500,
    priceBeforeDiscount: 900,
    image: "/android.jpg",
    message:
      "I would like to get the Android Level 2 course materials , how match ?",
    topics: [
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
  },
];

export default function CoursePage() {
  const phoneNumber = "201212140220";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <p className="text-2xl font-bold mb-6 text-black">
        Contact me via WhatsApp to get the course download link
      </p>
      <div className="w-full bg-green-200 py-2 overflow-hidden rounded-lg mb-6">
        <p className="whitespace-nowrap text-center text-black font-bold animate-marquee">
          🎉 70% discount on all courses ( Price is 499EGP ) 🎉
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

              <p className="text-gray-800 font-semibold mb-2">Course Topics:</p>
              <p className="text-gray-800 font-semibold mb-2">
                {course.topics}
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
              WhatsApp Me
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
