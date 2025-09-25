import { motion } from "framer-motion";

import * as styles from "./heroSection.css"
import Image from "next/image";
import Button from "../common/button/button";

export default function HeroSection() {
    return (
        <section className={styles.heroSectionContainer}>
            <div className="w-2/5">
                <motion.h2 initial={{ y: -6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }} className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Hi — I’m 
                <span className="text-pastel-green"> Máté, Front-End </span>
                <br />
                <span className="text-pastel-green">Developer</span>
                </motion.h2>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-4 max-w-xl text-gray-300">
                I build modern, accessible frontends with a focus on performance and UX. I enjoy turning design systems into production-ready interfaces and shipping delightful interactions.
                </motion.p>

                <div className="mt-6 flex gap-4 items-center">
                    <Button variant="outline" rounded>View my work</Button>
                    <Button variant="primary" rounded>Get in touch</Button>
                </div>
            </div>

            <div className="w-max">
                <Image 
                    alt="FeImage" 
                    src={"/FrontendGraphic.png"} 
                    width={500}
                    height={500}
                    style={{ objectFit: 'cover' }} 
                    draggable={false}
                />
            </div>
        </section>
    )
}