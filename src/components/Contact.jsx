import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, ["0%", "100%"], ["-20%", "25%"]);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative min-h-screen bg-[#f7f7f7] overflow-hidden pt-32 flex items-end"
    >
      {/* Huge Background Text */}

      <motion.div
        style={{ y }}
        className="absolute inset-0 flex justify-center items-start pointer-events-none overflow-hidden"
      >
        <h1
          className="
          text-[24vw]
          font-black
          uppercase
          leading-[0.75]
          tracking-tight
          text-black/[0.05]
          select-none
          scale-y-[1.55]
          origin-top
        "
          style={{
            fontFamily: "'Impact','Arial Black',sans-serif",
          }}
        >
          CONTACT
        </h1>
      </motion.div>

      {/* Form Container */}

      <div className="relative z-10 w-full flex justify-center">

        <div
          data-aos="fade-up"
          className="
          w-full
          lg:w-[82%]
          bg-[#ff2a2a]
          rounded-[40px]
          shadow-[0_25px_80px_rgba(255,42,42,.35)]
          px-8
          md:px-16
          py-12
          md:py-20
          text-white
        "
        >
          {/* Top */}

          <div className="mb-16">

            <p className="uppercase tracking-[0.45em] text-white/80 text-sm font-bold">

              Let's Connect &

            </p>

            <h2 className="text-4xl md:text-6xl font-black mt-5">

              Build Something Amazing

            </h2>

            <p className="text-white/80 mt-6 max-w-xl leading-8">

              I'm actively seeking Full Stack Developer opportunities where I can contribute, learn, and grow. Feel free to reach out regarding graduate hiring, internships, or full-time roles.

            </p>

          </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-white mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
                Available for Full-Time Opportunities
            </div>
          <form className="space-y-16">

            <div className="grid md:grid-cols-2 gap-16">

              {/* Left */}

              <div className="space-y-10">

                <div>

                  <input
                    type="text"
                    placeholder="First Name"
                    className="
                    w-full
                    bg-transparent
                    border-b
                    border-white/30
                    pb-4
                    text-lg
                    placeholder-white/70
                    focus:outline-none
                    focus:border-white
                    transition-all
                  "
                  />

                </div>

                <div>

                  <input
                    type="text"
                    placeholder="Last Name"
                    className="
                    w-full
                    bg-transparent
                    border-b
                    border-white/30
                    pb-4
                    text-lg
                    placeholder-white/70
                    focus:outline-none
                    focus:border-white
                    transition-all
                  "
                  />

                </div>

                <div>

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="
                    w-full
                    bg-transparent
                    border-b
                    border-white/30
                    pb-4
                    text-lg
                    placeholder-white/70
                    focus:outline-none
                    focus:border-white
                    transition-all
                  "
                  />

                </div>

              </div>
              
              {/* Right */}

              <div>

                <textarea
                  rows="8"
                  placeholder="Tell me about your project..."
                  className="
                  w-full
                  bg-transparent
                  border-b
                  border-white/30
                  pb-4
                  resize-none
                  text-lg
                  placeholder-white/70
                  focus:outline-none
                  focus:border-white
                  transition-all
                "
                ></textarea>

              </div>

            </div>

            {/* Bottom */}
                        {/* Bottom */}

            <div className="flex flex-col lg:flex-row justify-between gap-12 items-start lg:items-end">

              {/* Left Side */}

              <div className="max-w-md">

                <div className="flex items-start gap-4">

                  <input
                    id="permission"
                    type="checkbox"
                    className="mt-1 w-5 h-5 accent-[#ff2a2a] cursor-pointer"
                  />

                  <label
                    htmlFor="permission"
                    className="text-white/80 leading-7 cursor-pointer"
                  >
                    I consent to being contacted regarding employment opportunities or professional collaboration.
                  </label>

                </div>

                <div className="mt-10">

                  <p className="uppercase tracking-[0.35em] text-xs text-white/70 font-bold">

                    Reach Me At

                  </p>

                  <div className="mt-5 space-y-2">

                    <p className="text-white">

                      sajjanapunithin@gmail.com

                    </p>

                    <p className="text-white/60">

                      Karimnagar, Telangana, India

                    </p>

                  </div>

                </div>

              </div>

              {/* Right Side */}

              <div className="flex flex-col items-start lg:items-end gap-8">

                <p className="text-white/70 max-w-sm text-sm leading-7 text-left lg:text-right">

                  Whether you have an entry-level opening,
                  graduate hiring program or Full Stack Developer opportunity,<br />
                  I'd love the opportunity to connect.
                </p>

                <button
                  type="submit"
                  className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  px-10
                  py-4
                  rounded-full
                  bg-white
                  text-[#ff2a2a]
                  font-bold
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white
                  hover:scale-105
                  shadow-[0_0_40px_rgba(255,255,255,.25)]
                  "
                >

                  Send Message

                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
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

                </button>

              </div>

            </div>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;