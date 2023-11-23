"use client"
import { fadeIn } from "@/utils/motionTransitions"
import { motion } from "framer-motion"
import { AvatarWorks } from "./AvatarWorks"
import { Slider } from "./Slider"


export function Services() {
    return (
        <div className="flex items-center justify-center h-screen">
            <AvatarWorks />

            <div className="flex flex-col gap-x-5 lg:flex-row">
                <div className="flex flex-col text-center md:text-left mb-10 m-5 max-[385px]:mt-36 md:w-[60vw] lg:w-[30vw]">
                    <motion.h1 className="mb-4 text-3xl"
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        Mis <span className="text-[#f5741c]">servicios.</span>
                    </motion.h1>
                    <motion.p
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="max-w-md">Como Técnico en Programación ofrezco una gama de servicios especializados para ayudar a empresas y
                        Los proyectos logran sus objetivos tecnológicos. Mi enfoque se basa en crear soluciones innovadoras y eficientes,
                        apoyado en mis sólidos conocimientos en desarrollo y programación de software.
                    </motion.p>
                </div>

                <motion.div
                    variants={fadeIn('up', 0.7)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                 <Slider />
                </motion.div>
            </div>
        </div>
    )
}
