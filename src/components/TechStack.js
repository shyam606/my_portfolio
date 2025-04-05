import { motion } from "framer-motion"; // Add animations

const TechStack = () => {
    return (
        <div>
            <motion.div
                className="flex flex-wrap justify-center gap-4 mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
            >
                {[
                    "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
                    "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg",
                    "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
                    "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
                    "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
                    "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
                    "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
                    "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
                ].map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        className="w-10 h-9 transition-transform transform hover:scale-110"
                        whileHover={{ scale: 1.2 }}
                    />
                ))}
            </motion.div>
            <motion.div
                className="flex flex-wrap justify-center gap-4 mt-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
            >
                {[
                    "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
                    "https://www.vectorlogo.zone/logos/github/github-icon.svg",
                    "https://www.vectorlogo.zone/logos/linux/linux-icon.svg",
                    "https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg",
                    "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
                    "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
                ].map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        className="h-9 transition-transform transform hover:scale-110"
                        whileHover={{ scale: 1.2 }}
                    />
                ))}
            </motion.div>
        </div>
    )
}

export default TechStack