import RevealOnScreen from "../RevealOnScreen";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative mt-4"
    >
      <RevealOnScreen>
        <div className="text-center z-10 px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
            Hii, I'm Navneet
          </h2>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a CSE undergrad at NIT Surat, passionate about web development,
            problem-solving, and tech innovation. I enjoy building efficient,
            user-friendly applications and contributing to impactful projects.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0,4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-700/50 text-blue-700 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0,2)] hover:bg-blue-700/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScreen>
    </section>
  );
}
