import RevealOnScreen from "../RevealOnScreen";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScreen>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-700/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2 ">VentureX</h3>
              {/* Add image here */}
              <div className="rounded-md mb-3">
                <a href="https://venturex-dev.vercel.app/">
                  <img
                    src="/Portfolio/Screenshot 2025-03-20 155056.png" // add your image here
                    alt="LocaleLuxe"
                    className="w-full h-auto rounded-md object-cover max-h-48 md:max-h-62" // Added object-cover and max-h
                  />
                </a>
              </div>

              <p className="text-gray-400 mb-5">
                VentureX is a web app where users can submit and pitch their
                startup ideas. It features personalized search, GitHub
                authentication, detailed startup pages, an editor's picks
                section, and user profiles. Built with Next.js, TypeScript,
                Tailwind CSS, and Sanity.io, it offers a seamless and responsive
                experience for startup enthusiasts.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "NextAuth.js",
                  "Sanity.io",
                  "Sentry",
                  "Vercel",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-700/10 text-blue-700 py-1 px-3 rounded-full text-sm hover:bg-blue-700/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center">
                <a
                  href="https://venturex-dev.vercel.app/"
                  className="text-sm my-4 me-2 bg-blue-700 text-white py-2 px-4 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0,4)]"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/NavneetPrajapati31/venturex.git"
                  className="text-sm my-4 bg-blue-700 text-white py-2 px-4 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0,4)]"
                >
                  <GitHubIcon fontSize="small" />
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-700/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2 ">Ecommerce Website</h3>
              {/* Removed the empty div */}
              <div className="rounded-md mb-3">
                <a href="https://kashvi-creation-psi.vercel.app/">
                  <img
                    src="/Portfolio/Screenshot 2025-03-10 000157.png"
                    alt="KASHVI"
                    className="w-full h-auto rounded-md object-cover max-h-48 md:max-h-62" // Added object-cover and max-h
                  />
                </a>
              </div>
              <p className="text-gray-400 mb-5">
                KASHVI is a sleek and user-friendly e-commerce platform for
                sarees, providing seamless navigation, categorized product
                listings, high-quality images, secure checkout, and personalized
                features like wishlist, cart, and order tracking for a smooth
                shopping experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {[
                  "React.js",
                  "Bootstrap",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "JWT",
                  "Vercel",
                  "Render",
                  "Razorpay",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-700/10 text-blue-700 py-1 px-3 rounded-full text-sm hover:bg-blue-700/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center">
                <a
                  href="https://kashvi-creation-psi.vercel.app/"
                  className="text-sm my-4 me-2 bg-blue-700 text-white py-2 px-4 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0,4)]"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/NavneetPrajapati31/THE_MATRIX-GWOC25.git"
                  className="text-sm my-4 bg-blue-700 text-white py-2 px-4 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0,4)]"
                >
                  <GitHubIcon fontSize="small" />
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-700/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2 ">Rental Marketplace</h3>
              {/* Add image here */}
              <div className="rounded-md mb-3">
                <a href="https://localeluxe.onrender.com/">
                  <img
                    src="/Portfolio/Screenshot 2025-03-10 000330.png" // add your image here
                    alt="LocaleLuxe"
                    className="w-full h-auto rounded-md object-cover max-h-48 md:max-h-62" // Added object-cover and max-h
                  />
                </a>
              </div>

              <p className="text-gray-400 mb-5">
                LocaleLuxe is a modern platform connecting travelers with unique
                stays and rentals. It offers an intuitive booking experience,
                detailed property listings, user authentication, and advanced
                search and filtering for a personalized stay. Hosts can easily
                list and manage properties, ensuring a seamless experience for
                both guests and owners.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {[
                  "EJS",
                  "Bootstrap",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Render",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-700/10 text-blue-700 py-1 px-3 rounded-full text-sm hover:bg-blue-700/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center">
                <a
                  href="https://localeluxe.onrender.com/"
                  className="text-sm my-4 me-2 bg-blue-700 text-white py-2 px-4 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0,4)]"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/NavneetPrajapati31/LocaleLuxe.git"
                  className="text-sm my-4 bg-blue-700 text-white py-2 px-4 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0,4)]"
                >
                  <GitHubIcon fontSize="small" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScreen>
    </section>
  );
}
