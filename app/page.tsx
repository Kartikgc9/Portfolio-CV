// app/page.tsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <About />
      <Skills />        {/* moved up */}
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
