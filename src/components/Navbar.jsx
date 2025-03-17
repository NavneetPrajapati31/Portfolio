import { useEffect } from "react";

export default function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0,8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-blue-500">
            Portfolio
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/navneet-prajapati-640345290/"
              className="border border-blue-700/50 text-blue-700 py-1 px-3 rounded font-medium transition-all duration-200 hover:shadow-[0_0_15px_rgba(59,130,246,0,2)] hover:bg-blue-700 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/NavneetPrajapati31"
              className="border border-blue-700/50 text-blue-700 py-1 px-3 rounded font-medium transition-all duration-200 hover:shadow-[0_0_15px_rgba(59,130,246,0,2)] hover:bg-blue-700 hover:text-white"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
