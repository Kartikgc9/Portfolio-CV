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
        title: "Hardware & Signal Processing Intern",
        company: "Project: AI-Enhanced Adaptive Noise Cancellation",
        period: "Jan 2025 – Mar 2025",
        highlights: [
          "Designed a hybrid DSP-AI system using LMS filters and LSTM networks for active noise cancellation.",
          "Developed the signal pipeline using Librosa, SoundDevice, and TensorFlow.",
          "Deployed real-time inference on Raspberry Pi with custom electret mic array.",
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
  