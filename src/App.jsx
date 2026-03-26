import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import heroImage from "./assets/profile.jpg";

export default function App() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const expertise = [
    {
      title: "Strategy & Direction",
      desc: "I focus on understanding user needs, business goals, and market trends to create meaningful digital strategies. From research and wireframing to user journeys, I ensure every design decision aligns with a clear purpose and delivers real value.",
      icon: "◎",
    },
    {
      title: "Branding & Logo",
      desc: "I design impactful brand identities that communicate a strong and memorable message. From logos to visual systems, I create cohesive branding that reflects the personality of a product and connects emotionally with its audience.",
      icon: "◈",
    },
    {
      title: "UI & UX Design",
      desc: "I craft intuitive, user-friendly interfaces that enhance user experience across all devices. By combining usability principles with modern design trends, I create visually appealing and seamless interactions that users enjoy.",
      icon: "✦",
    },
    {
      title: "Frontend Development",
      desc: "I transform designs into responsive, high-performance websites using modern technologies like React and Tailwind CSS. My focus is on clean code, smooth interactions, and delivering fast, accessible web experiences.",
      icon: "</>",
    },
  ];

  const projects = [
    {
      title: "Crypto Crash Game",
      desc: "A real-time cryptocurrency crash betting game built with WebSockets and provably fair algorithms. The platform ensures transparency using hashed seeds while handling live game rounds and wallet updates securely.",
      image:
        "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=1200&q=80",
      link: "https://github.com/Ayush12kumar/crypto-crash-backend",
    },
    {
      title: "Notes Manager App",
      desc: "A full-stack notes management application with authentication and CRUD operations. Users can create, update, and manage notes securely with a clean and responsive interface.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      link: "#",
    },
    {
      title: "Personal Portfolio Website",
      desc: "A modern, responsive portfolio showcasing projects, skills, and experience. Designed with smooth animations and performance-focused sections for better user engagement.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
      link: "#",
    },
  ];

  const navItems = ["Home", "Portfolio", "About me", "Contact"];

  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.12,
        ease: "easeOut",
      },
    }),
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    try {
      await emailjs.sendForm(
        "service_xdvh994",
        "template_14feok7",
        formRef.current,
        "nh3iuNvFBCai-vWR-"
      );

      setStatusMessage("Message sent successfully.");
      formRef.current.reset();
    } catch (error) {
      setStatusMessage("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f5f3ff] to-[#eef2ff] text-slate-800">
      <header className="sticky top-0 z-30 border-b border-white/30 bg-white/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-teal-100 text-sm font-bold text-teal-700">
              ✿
            </div>
            <span className="text-sm font-semibold tracking-tight">logoipsum</span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-sm font-medium transition hover:text-violet-600 ${
                  index === 0 ? "text-violet-600" : "text-slate-700"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-md border border-violet-500 px-5 py-2 text-sm font-medium text-violet-600 transition hover:bg-violet-50"
          >
            Contact Me
          </a>
        </div>
      </header>

      <main>
        <motion.section
          id="home"
          className="bg-transparent"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-20">
            <div className="max-w-xl">
              <p className="mb-6 text-sm text-slate-700">Hey, I am Ayush</p>
              <h1 className="max-w-lg text-4xl font-bold leading-tight tracking-tight text-slate-800 md:text-6xl">
                <span className="text-violet-700">I Design</span> Beautiful
                <br />
                Interfaces &amp; Build
                <br />
                Them into Reality
              </h1>
              <a
                href="#contact"
                className="mt-10 inline-flex rounded-md bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-300 transition hover:-translate-y-0.5 hover:bg-violet-700"
              >
                Get in Touch
              </a>
            </div>

            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative w-full max-w-md">
                <div className="absolute -bottom-4 -right-4 h-full w-full rounded-sm bg-slate-300/80" />
                <img
                  src={heroImage}
                  alt="Ayush portfolio hero"
                  className="relative z-10 h-[520px] w-full rounded-sm object-cover shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="my-skills"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-10"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="mb-2 text-xs font-medium text-slate-500">My Skills</p>
          <h2 className="mb-14 text-5xl font-bold tracking-tight text-slate-800">
            My Expertise
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {expertise.map((item, idx) => (
              <motion.div
                key={item.title}
                custom={idx}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`rounded-2xl border border-white/40 bg-white/50 p-6 shadow-lg backdrop-blur-md ${ 
                  idx === 0 ? "border-b-2 border-b-violet-500" : ""
                }`}
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-white text-lg font-bold text-teal-700 shadow">
                  {item.icon}
                </div>
                <h3 className="mb-4 text-2xl font-semibold tracking-tight text-slate-800">
                  {item.title}
                </h3>
                <p className="text-base leading-7 text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="about-me"
          className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-20"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -left-4 top-4 h-full w-full rounded-sm bg-slate-300/80" />
              <img
                src={heroImage}
                alt="About Ayush"
                className="relative z-10 h-[520px] w-full rounded-sm object-cover shadow-2xl"
              />
            </div>
          </motion.div>

          <div className="max-w-xl">
            <p className="mb-2 text-sm text-slate-500">About</p>
            <h2 className="mb-6 text-5xl font-bold tracking-tight text-slate-800">
              About Me
            </h2>
            <p className="text-2xl font-medium leading-10 text-slate-700">
              I’m a UI/UX Designer and Frontend Developer focused on creating
              intuitive, user-friendly, and visually appealing web experiences. I
              specialize in building responsive interfaces using modern
              technologies like React and Tailwind CSS, combining design thinking
              with clean code to deliver impactful digital products.
            </p>
          </div>
        </motion.section>

        <motion.section
          id="portfolio"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-10"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-medium text-slate-500">
                Recent Projects
              </p>
              <h2 className="text-5xl font-bold tracking-tight text-slate-800">
                My Portfolio
              </h2>
            </div>

            <a
              href="https://github.com/Ayush12kumar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-md bg-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition hover:bg-pink-600"
            >
              <span>◎</span>
              Visit My GitHub
            </a>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                custom={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-white/40 bg-white/60 shadow-lg backdrop-blur-md"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-3 text-3xl font-semibold tracking-tight text-slate-800">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-base leading-7 text-slate-600">
                    {project.desc}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-b border-violet-500 pb-1 text-sm font-semibold text-slate-800"
                  >
                    View Project <span className="text-violet-600">↗</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="mx-auto max-w-4xl px-6 py-20 lg:px-10"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-center">
            <p className="mb-2 text-xs font-medium text-slate-500">Get In Touch</p>
            <h2 className="mb-4 text-5xl font-bold tracking-tight text-slate-800">
              Contact me
            </h2>
            <p className="mx-auto max-w-xl text-lg text-slate-600">
              Feel free to reach out for collaborations, opportunities, or just a
              quick chat.
            </p>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="mt-14 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  First name
                </label>
                <input
                  name="first_name"
                  required
                  className="h-12 w-full rounded-md border border-violet-400 px-4 outline-none transition focus:ring-2 focus:ring-violet-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Last name
                </label>
                <input
                  name="last_name"
                  className="h-12 w-full rounded-md border border-violet-400 px-4 outline-none transition focus:ring-2 focus:ring-violet-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  name="user_email"
                  type="email"
                  required
                  className="h-12 w-full rounded-md border border-violet-400 px-4 outline-none transition focus:ring-2 focus:ring-violet-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Phone number
                </label>
                <input
                  name="phone_number"
                  className="h-12 w-full rounded-md border border-violet-400 px-4 outline-none transition focus:ring-2 focus:ring-violet-200"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Choose a topic
              </label>
              <select
                name="topic"
                className="h-12 w-full rounded-md border border-violet-400 bg-white px-4 outline-none transition focus:ring-2 focus:ring-violet-200"
              >
                <option>Select one...</option>
                <option>Web Design</option>
                <option>UI/UX Project</option>
                <option>Frontend Development</option>
                <option>Collaboration</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                name="message"
                rows={7}
                placeholder="Type your message..."
                required
                className="w-full rounded-md border border-violet-400 px-4 py-3 outline-none transition focus:ring-2 focus:ring-violet-200"
              />
            </div>

            <label className="flex items-center gap-3 text-sm text-slate-700">
              <input
                type="checkbox"
                required
                className="h-4 w-4 rounded border-slate-300"
              />
              accept the terms
            </label>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSending}
                className="rounded-md bg-violet-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? "Sending..." : "Submit"}
              </button>

              {statusMessage && (
                <p className="mt-4 text-sm text-slate-600">{statusMessage}</p>
              )}
            </div>
          </form>
        </motion.section>
      </main>

      <footer className="mt-10 bg-white/40 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="flex flex-col gap-8 border-b border-slate-200 pb-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-teal-100 text-sm font-bold text-teal-700">
                ✿
              </div>
              <span className="text-sm font-semibold tracking-tight">logoipsum</span>
            </div>

            <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-700">
              {["Home", "Portfolio", "About me", "Contact"].map((item, i) => (
                <a
                  key={`${item}-${i}`}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="transition hover:text-violet-600"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4 text-lg text-slate-800">
              <a href="#">f</a>
              <a href="#">◉</a>
              <a href="#">𝕏</a>
              <a
                href="https://www.linkedin.com/in/ayush-kumar-a82876282/"
                target="_blank"
                rel="noreferrer"
              >
                in
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>Made with 💗 by Ayush</p>
            <div className="flex flex-wrap gap-6">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}