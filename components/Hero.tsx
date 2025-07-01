// ✅ Hero.tsx with Gradient Name + Framer Motion + Typing Effect
'use client';

import { Github, Linkedin, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';

export default function Hero() {
  const [text] = useTypewriter({
    words: ['ML Engineer', 'Data Analytics', 'AI Enthusiast'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className="w-full h-screen flex flex-col justify-center items-center text-center">
      <motion.img
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        src="/ImageMy.jpg"
        alt="Kartik Awadh Yadav"
        className="w-64 h-auto object-contain shadow-lg mb-6 rounded-md"
      />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-2"
      >
        Kartik Awadh Yadav
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg text-gray-600 dark:text-gray-300 mb-4"
      >
        <span className="font-semibold">{text}</span>
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex gap-6 justify-center"
      >
        <a href="https://github.com/Kartikgc9" target="_blank" rel="noopener noreferrer">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com/in/kartik-awadh-yadav-941300222" target="_blank" rel="noopener noreferrer">
          <Linkedin size={24} />
        </a>
        <a href="public\kay_new.pdf" download>
          <FileDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}
