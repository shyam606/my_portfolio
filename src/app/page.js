"use client"
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion"; // Add animations
import { MdOutlineMailOutline } from "react-icons/md";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      {/*  */}
      <div className="relative w-full">
        <div className="my_container mt-5">
          <motion.h1
            className="text-3xl code_font font-bold mt-2 text-green-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Experience
          </motion.h1>

          {/* Sachtech Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }} className="backdrop-blur border border-green-400 rounded-xl p-5 mt-7 shadow-lg shadow-green-500/10 transition-transform hover:scale-[1.01]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold code_font text-green-400">Associate Software Engineer</h2>
                <p className="text-md text-green-400 code_font">Sachtech Solution</p>
              </div>
              <p className="text-md text-green-400 font-bold">📆 Nov 2022 – Mar 2025</p>
            </div>
            <ul className="list-disc list-inside text-white mt-4 text-sm space-y-1">
              <li>
                Delivered <strong>15+ responsive web apps</strong> across domains like e-commerce, dating, healthcare, and document storage (Google Drive-style), with both user-facing sites and admin panels.
              </li>
              <li>
                Engineered rich UI/UX using <strong>Tailwind CSS</strong>, <strong>animated components</strong>, and <strong>Fabric.js canvas</strong> for advanced editing features.
              </li>
              <li>
                Integrated modern services including <strong>Firebase</strong> (auth, realtime DB, storage), <strong>Stripe</strong> payments, and <strong>social logins</strong> (Google, Facebook, Apple, LinkedIn).
              </li>
              <li>
                Used <strong>Redux Toolkit</strong> and <strong>RTK Query</strong> for robust state and API management, while collaborating in <strong>Agile/Scrum</strong> teams to ensure high-quality, scalable code.
              </li>
            </ul>
          </motion.div>

          {/* Oodles Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }} className="backdrop-blur-md border border-green-400 rounded-xl p-5 mt-7 shadow-lg shadow-green-500/10 transition-transform hover:scale-[1.01]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-green-400 code_font">Assistant Consultant Software Developer</h2>
                <p className="text-md text-green-400 code_font">Oodles Technologies</p>
              </div>
              <p className="text-md text-green-400 font-bold">📆 Dec 2021 – Aug 2022</p>
            </div>
            <ul className="list-disc list-inside text-white mt-4 text-sm space-y-1">
              <li>
                Worked on <strong>3 web applications</strong> including a calling app with real-time communication, and a hospital management system.
              </li>
              <li>
                Integrated and handled real-time events using <strong>WebSockets</strong> for voice/video call functionality.
              </li>
              <li>
                Designed and built responsive UI components using <strong>Tailwind CSS</strong> and added smooth UI transitions with animation libraries.
              </li>
              <li>
                Collaborated in <strong>Agile teams</strong> to develop scalable modules and performed code optimizations for performance.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      {/*  Education*/}
      <div className="relative w-full py-8">
        <div className="my_container mt-5">
          <motion.h1 className="text-3xl code_font font-bold mt-2 text-green-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          > Education </motion.h1>
          {/* BCA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="backdrop-blur-md border border-green-400 rounded-xl p-5 mt-7 shadow-lg shadow-green-500/10 transition-transform hover:scale-[1.01]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold code_font text-green-400">Bachelor of Computer Applications</h2> <p className="text-md text-green-400 code_font">IMS Roorkee</p>
              </div>
              <p className="text-md text-green-400 font-bold">📆 2017 – 2020</p>
            </div>
          </motion.div>
          {/* MCA Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="backdrop-blur-md border border-green-400 rounded-xl p-5 mt-7 shadow-lg shadow-green-500/10 transition-transform hover:scale-[1.01]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-green-400 code_font">Master of Computer Applications</h2> <p className="text-md text-green-400 code_font">IMS Roorkee</p>
              </div>
              <p className="text-md text-green-400 font-bold">📆 2020 – 2022</p>
            </div>
          </motion.div>
        </div>
      </div>
      {/* footer */}
      <div className="relative flex items-center justify-end gap-2 text-center mr-4 pt-10 pb-4">
        <MdOutlineMailOutline color="#fff" size={20}/>
        <motion.p 
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5, duration: 1 }}
        className="text-green-400 text-xl">shyamsainidbd2@gmail.com</motion.p>
      </div>
    </main>
  );
}
