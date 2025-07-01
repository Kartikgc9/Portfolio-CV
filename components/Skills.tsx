export default function Skills() {
    const skills = [
      "Python/C++",
      "Postman",
      "PowerBI",
      "API-DEV",
      "SAP ABAP",
      "Python",
      "FastAPI",
      "TensorFlow",
      "PyTorch",
      "Git",
      "Docker",
    ];
  
    return (
      <section id="skills" className="w-full max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg shadow text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    );
  }
  