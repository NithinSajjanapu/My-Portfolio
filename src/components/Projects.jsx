import React from "react";
import { motion } from "framer-motion";
import { image } from "framer-motion/client";
import gymImage from "../assets/projects/gym.png";
import AutoMobile from "../assets/projects/automobile.png";
import dashboardImage from "../assets/projects/dashboard.png";


const projects = [
  {
    number: "01",
    title: "Gym Management System",
    image: gymImage,
    category: "Full Stack Web Application",
    year: "2026",
    description:
      "A full-stack gym management platform actively used by a local fitness club to manage member registrations, subscription renewals, payment tracking, and daily operations through a modern administrative dashboard.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary"
    ],
      live: "https://veergms.vercel.app",
      github: "https://github.com/nithinsajjanapu/gym-management-system"
  },

  {
    number: "02",
    title: "E-Commerce Application (AutoMobile)",
    category: "AutoWorkshop System",
    image: AutoMobile,
    year: "2026",
    description:
      "A full-stack automobile workshop management platform with an integrated e-commerce system, enabling service booking, repair tracking, inventory management, customer records, online spare parts sales, and secure order management through a modern admin dashboard.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    live: "https://shivamautostores.vercel.app",
    github: "https://github.com/NithinSajjanapu/E-Commerce-web-application"
  },

  {
    number: "03",
    title: "Client Dashboard",
    image: dashboardImage,
    category: "Business Solution",
    year: "2026",
    description:
      "A scalable business dashboard for handling customer records, analytics, authentication and operational workflows with a clean interface.",
    tech: [
      "React",
      "Node",
      "MongoDB"
    ],
    live: "#",
    github: "#"
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 bg-[#0a0a0a] overflow-hidden py-28"
    >

      {/* Background Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#ff2a2a]/10 blur-[180px] rounded-full"></div>

      {/* Huge Background Text */}

      <h1
        className="absolute top-8 left-1/2 -translate-x-1/2
        text-[20vw]
        leading-none
        font-black
        uppercase
        text-white/5
        pointer-events-none
        select-none"
        style={{ fontFamily: "'Impact', sans-serif" }}
      >
        PROJECTS
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}

        <motion.div

          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}

          className="text-center mb-24"
        >

          <p className="uppercase tracking-[0.45em] text-[#ff2a2a] font-bold text-sm">

            Selected Work

          </p>

          <h2 className="text-white text-5xl md:text-7xl font-black mt-5">

            Featured Projects

          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-8 leading-8">

            A collection of projects focused on performance,
            scalable architecture and beautiful user experiences.

          </p>

        </motion.div>

        {/* Projects */}

        <div className="space-y-36">

          {projects.map((project, index) => (

            <motion.div

              key={project.number}

              initial={{ opacity: 0, y: 80 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ duration: .8 }}

              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}

            >

              {/* Project Preview */}

              <div className="group">

                <div
                  className="
                  relative
                  aspect-[16/10]
                  rounded-[30px]
                  bg-[#121212]
                  border
                  border-white/10
                  overflow-hidden
                  transition-all
                  duration-500
                  group-hover:border-[#ff2a2a]
                  group-hover:shadow-[0_0_70px_rgba(255,42,42,.25)]
                  "
                >

                  {/* Gradient */}

                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff2a2a]/30 via-transparent to-transparent"></div>

                  {/* Fake Browser */}

                  <div className="absolute top-0 left-0 right-0 h-12 bg-black/40 border-b border-white/10 flex items-center px-5 gap-2">

                    <span className="w-3 h-3 rounded-full bg-red-500"></span>

                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>

                    <span className="w-3 h-3 rounded-full bg-green-500"></span>

                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      object-top
                      transition-all
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Optional dark overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500"></div>
                  
                </div>
                <div className="mt-5 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
                        Live Project Preview
                    </p>
                </div>
              </div>

              {/* Content */}

              <div>

                <span className="text-[#ff2a2a] text-7xl font-black">

                  {project.number}

                </span>

                <p className="uppercase tracking-[0.35em] text-sm text-gray-500 mt-5">

                  {project.category}

                </p>

                <h3 className="text-white text-4xl md:text-5xl font-black mt-5">

                  {project.title}

                </h3>

                <p className="text-gray-400 leading-8 mt-8">

                  {project.description}

                </p>

                <div className="flex flex-wrap gap-3 mt-10">

                  {project.tech.map((item) => (
                                        <span
                      key={item}
                      className="
                        px-5
                        py-2
                        rounded-full
                        bg-white/5
                        border
                        border-white/10
                        text-gray-300
                        text-sm
                        font-semibold
                        transition-all
                        duration-300
                        hover:bg-[#ff2a2a]
                        hover:border-[#ff2a2a]
                        hover:text-white
                      "
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <div className="flex flex-wrap gap-5 mt-12">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-7
                      py-3
                      rounded-full
                      bg-[#ff2a2a]
                      text-white
                      font-bold
                      transition-all
                      duration-300
                      hover:bg-white
                      hover:text-black
                      hover:scale-105
                    "
                  >
                    Live Demo →
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-7
                      py-3
                      rounded-full
                      border
                      border-white/20
                      text-white
                      font-bold
                      transition-all
                      duration-300
                      hover:border-[#ff2a2a]
                      hover:text-[#ff2a2a]
                    "
                  >
                    GitHub
                  </a>

                </div>

                <p className="text-gray-600 mt-8 font-semibold">

                  {project.year}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div

          initial={{ opacity: 0, y: 60 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: .8 }}

          className="mt-36 text-center"

        >

          <p className="uppercase tracking-[0.45em] text-[#ff2a2a] text-sm font-bold">

            Let's Build Something Amazing

          </p>

          <h2 className="text-white text-4xl md:text-6xl font-black mt-6">

            Ready to Join Your Team!

          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-8 leading-8">

            As a passionate Full Stack Developer, I'm seeking an opportunity to contribute
            to real-world products, solve meaningful engineering challenges, and continuously
            grow with an innovative development team.

          </p>

          <a

            href="#contact"

            className="
              inline-flex
              items-center
              gap-3
              mt-12
              px-10
              py-4
              rounded-full
              bg-[#ff2a2a]
              text-white
              font-bold
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              hover:scale-105
              shadow-[0_0_40px_rgba(255,42,42,.25)]
            "

          >

            Hire Me

            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
              />

            </svg>

          </a>

        </motion.div>

      </div>

    </section>
  );
};

export default Projects;