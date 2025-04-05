"use client"
import { SlSocialLinkedin } from "react-icons/sl";
import { LuGithub } from "react-icons/lu";
import { motion } from "framer-motion"; // Add animations
import TechStack from "@/components/TechStack";
import ParticlesBackground from "./ParticlesBackground";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const HeroSection = () => {
    return (
        <div className="relative h-screen w-full flex items-center justify-center text-white">
            {/* Particles Background */}
            <ParticlesBackground />
            {/* social links */}
            <div className="absolute top-5 right-8 z-10">
                <div className="flex items-center justify-end gap-4">
                    <a
                        href="https://github.com/shyam606"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform transform hover:scale-110"
                    >
                        <LuGithub size={35} className="text-gray-300 hover:text-white" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shyam-saini-094b52201"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform transform hover:scale-110"
                    >
                        <SlSocialLinkedin size={28} className="" />
                    </a>
                    <a
                        href="/Shyam_Saini_latest.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform transform hover:scale-110"
                    >
                        <HiOutlineDocumentArrowDown size={28} className="" />
                    </a>
                </div>
            </div>
            <div className="absolute top-3 left-8 z-10">
                <motion.a
                    href="mailto:shyamsainidbd2@gmail.com"
                    className="inline-block px-3 py-1 text-md font-semibold text-white bg-transparent border border-green-400 rounded-lg shadow-lg hover:scale-105 transition-all"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    Hire Me
                </motion.a>
            </div>
            {/* middle content */}
            <div className="absolute z-10 text-center">
                <motion.h1
                    className="text-5xl code_font font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    Hi, I'm Shyam Saini
                </motion.h1>

                <motion.p
                    className="text-lg mt-2 text-green-400"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    ReactJS | Next.js | Frontend Developer
                </motion.p>

                {/* Tech Stack Icons with Animation */}
                <TechStack />

                {/* Hire Me Button */}

            </div>
        </div>
    )
}

export default HeroSection