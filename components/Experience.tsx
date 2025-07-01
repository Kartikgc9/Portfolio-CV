// components/Experience.tsx
export default function Experience() {
    const experiences = [
      {
        title: "Machine Learning Intern",
        company: "Zummit Infolabs, Bangalore (Remote)",
        period: "Apr 2024 – Aug 2024",
        highlights: [
          "Developed a face recognition model using Keras-Facenet, improving identification accuracy by 92%.",
          "Integrated the model with TensorFlow Lite for Edge AI deployment, reducing computation time by 90%.",
          "Automated image preprocessing using OpenCV, cutting manual effort by 85%.",
          "Deployed the model on NVIDIA Jetson Nano for real-time use.",
        ],
      },
      
      {
        title: "Summer Intern",
        company: "ONGC(Oil and Natural Gas Corporation India Limited, New Delhi)(On-Site)",
        period: "Jun 2025 – July 2025",
        highlights: [
          "This project implements a secure visitor entry API using Express.js, with JWT authentication for controlled access.",
          "APIs support real-time recording, user login, and visitor filtering by date, time, and employee.",
          "A Power BI dashboard was created to visualize visitor behavior, revealing peak load trends (30%) and employee-wise visit counts.",
          "This system enhances organizational transparency, improves analysis speed by 65%, and scales for enterprise use.",
          "Developed custom SAP ABAP modules for HRM and FM, including dynamic reports, multi-screen interfaces, and interactive internal tables.",
          "Designed and implemented database tables, ALV reports, and screen logic to streamline workflows within ONGCs enterprise system with a Training only access to the software.",
        ],
      },
    ];
  
    return (
      <section id="experience" className="w-full max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-semibold mb-8">Experience</h2>
        <div className="flex flex-col gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="border rounded-xl p-6 shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold">
                {exp.title} <span className="text-gray-600"> @ {exp.company}</span>
              </h3>
              <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
  