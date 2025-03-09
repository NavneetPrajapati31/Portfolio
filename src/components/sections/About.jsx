import RevealOnScreen from "../RevealOnScreen";

export default function About() {
  const frontendSkills = ["React", "TailwindCSS", "Bootstrap", "MUI"];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "NPM",
    "MongoDB",
    "Python",
    "JWT",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScreen>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-700/30 transition-all">
            <p className="text-gray-300 mb-6">
              As a passionate Computer Science student, I excel in unraveling
              complex challenges and discovering innovative solutions. My
              academic journey has provided me with a strong foundation in
              algorithms, data structures, and software development. My hands-on
              experience with various coding projects has deepened my love for
              technology.
              <br /> <br />
              I've engaged in a wide array of projects, from building web
              applications to designing machine learning models. These
              experiences have honed my proficiency in languages such as C++ and
              Python, while also enhancing my grasp of software engineering
              principles. <br /> <br />
              I'm an enthusiastic participant in coding competitions and
              hackathons, where I relish the opportunity to solve real-world
              problems in a collaborative setting. My aspiration is to
              contribute to meaningful projects and keep learning in the
              ever-changing tech landscape.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-700/10 text-blue-700 py-1 px-3 rounded-full text-sm hover:bg-blue-700/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-700/10 text-blue-700 py-1 px-3 rounded-full text-sm hover:bg-blue-700/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-700/30 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Computer Science and Engineering</strong> -
                  SVNIT, Surat (2023-2027)
                </li>

                <li>
                  Relevant Courses: Data Structures and Algorithms, Web
                  Development, Artifical Intelligence...
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-700/30 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Representative and Mentor at NEXUS - NIT, Surat
                    (2023-Present)
                  </h4>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Junior Developer at GDGC - NIT, Surat (2024-Present)
                  </h4>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Executive at ACM - NIT, Surat (2024-Present)
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScreen>
    </section>
  );
}
