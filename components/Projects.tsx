// components/Projects.tsx
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI-Enhanced Adaptive Noise Cancellation",
    description:
      "Built an AI-powered active noise cancellation system using adaptive LMS filters and LSTM networks on MFCC features. Implemented real-time DSP architecture with microphones, Class-D speakers, and Raspberry Pi for on-device inference.",
    link: "https://github.com/Kartikgc9/KAY_API", // update if needed
    tags: ["#AI", "#SignalProcessing", "#LSTM", "#RaspberryPi"],
  },
  {
    title: "Deepfake Detection Engine",
    description:
      "Designed a 3D CNN + LSTM architecture for detecting spatio-temporal inconsistencies in deepfake videos. Integrated PyTorch with Docker, OpenCV, and REST APIs for scalable real-time video analysis across cloud and edge deployments.",
    link: "https://drive.google.com/file/d/1xzyZQGhHB5X1wn8pnCbTHC9Wo_6F87bC/view?usp=drive_link",
    tags: ["#Deepfake", "#ComputerVision", "#Docker", "#PyTorch"],
  },
  {
    title: "Face Recognition with FaceNet and Keras",
    description:
      "Developed a real-time facial recognition system using FaceNet and TensorFlow Lite, achieving 92% accuracy and deployed on Jetson Nano. Integrated OpenCV preprocessing and TTS interface for interactive identity confirmation.",
    link: "https://github.com/Kartikgc9/faceRecognition_Labs",
    tags: ["#AI", "#FaceRecognition", "#TensorFlow", "#EdgeAI"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-5xl px-6 py-20">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border rounded-xl p-6 shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              View Project <ExternalLink className="ml-1" size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
