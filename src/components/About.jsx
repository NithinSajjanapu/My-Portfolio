import React from 'react';
import stackImage from '../assets/about/image.png';
import reactImage from '../assets/about/react.png';
import nodeImage from '../assets/about/node.png';
import mongoImage from '../assets/about/mongodb.png';
import resumePDF from "../assets/resume/Nithin-Resume.pdf";


const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[#ff2a2a] pt-24 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >

      {/* 🔥 Background Text */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[18vw] font-black text-black/10 select-none pointer-events-none tracking-tight">
        ABOUT
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">

          <div data-aos="drop-bounce" className="relative flex justify-center w-full">

            {/* Lanyard */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>

            {/* Clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10"></div>

            {/* Badge */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-4 shadow-2xl relative z-20 transform -rotate-3 hover:rotate-0 transition duration-500">

              <div className="text-center text-white mb-3">
                <p className="text-xs tracking-[0.3em] text-white/60">FULL STACK</p>
                <h3 className="text-lg font-black">DEVELOPER</h3>
              </div>

              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border border-white/10">
                <img
                  src={stackImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center mt-3 text-xs text-white/60">
                React • Node • MongoDB
              </div>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-col gap-3 w-full items-center">

            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black text-white rounded-full font-bold hover:scale-105 transition inline-flex items-center justify-center"
            >
              View Resume
            </a>

            <a href="#projects" className="text-white/80 hover:text-white text-sm underline">
              View Projects →
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 text-white relative z-10">

          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            Software Developer
          </h2>

          <p className="text-lg leading-8 text-white/90 max-w-3xl mb-10">
            I'm <span className="text-black font-black uppercase">Nithin</span>,
            a Full Stack Developer passionate about building fast, scalable,
            and user-focused web applications. I specialize in React, Node.js,
            Express, MongoDB, and modern JavaScript, transforming ideas into
            production-ready solutions with clean architecture and great UX.
          </p>

          {/* STATS (NEW - POINT 3) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">

            <div>
              <h3 className="text-3xl font-black text-black">10+</h3>
              <p className="text-white/70 text-sm">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-black">1+</h3>
              <p className="text-white/70 text-sm">Years Exp</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-black">15+</h3>
              <p className="text-white/70 text-sm">Technologies</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-black">100%</h3>
              <p className="text-white/70 text-sm">Dedication</p>
            </div>

          </div>

          {/* SKILLS PILLS (POINT 5) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-10">

            {[
              "HTML5",
              "CSS3",
              "React",
              "JavaScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Render",
              "Vercel",
              "Git",
              "Cloudinary"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-black/20 text-white text-sm text-center hover:bg-black transition"
              >
                {skill}
              </span>
            ))}

          </div>
        </div>
      </div>

      {/* DECORATIVE STAR */}
      <div className="absolute bottom-20 right-10 opacity-20 animate-pulse">
        <div className="w-20 h-20 bg-black rotate-45"></div>
      </div>

    </section>
  );
};

export default About;