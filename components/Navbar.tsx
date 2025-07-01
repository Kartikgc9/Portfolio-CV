"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const links = ["About", "Skills", "Experience", "Projects", "Resume"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.5 }
    );

    const sectionIds = links.map((link) => link.toLowerCase());
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Kartik Awadh Yadav
        </Link>
        <div className="hidden md:flex gap-6">
          {links.map((link) => {
            const id = link.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`relative font-medium text-gray-700 hover:text-blue-600 transition duration-200 ${
                  isActive ? "text-blue-700 font-semibold" : ""
                }`}
              >
                {link}
                <span
                  className={`absolute left-0 bottom-[-2px] h-[2px] w-full bg-blue-600 transition-transform duration-300 transform origin-left scale-x-0 hover:scale-x-100 ${
                    isActive ? "scale-x-100" : ""
                  }`}
                ></span>
              </a>
            );
          })}
        </div>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4">
          {links.map((link) => {
            const id = link.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`block py-2 font-medium text-gray-700 hover:text-blue-600 transition duration-200 ${
                  isActive ? "text-blue-700 font-semibold" : ""
                }`}
              >
                {link}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
