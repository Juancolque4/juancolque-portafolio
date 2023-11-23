"use client"
import { fadeIn } from "@/utils/motionTransitions";

import { motion } from 'framer-motion';
import { useState } from "react";

export function Work() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleClick = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index);
    };

    const cardVariants = {
        expanded: {
            width: "360px",
            opacity: 1
        },
        collapsed: {
            width: "200px",
            opacity: 0.2
        }
    };

    return (
        <div className="h-screen">
            <AvatarDos/>
            <div className="grid pb-32 md:min-h-screen mt-40 md:mt-22 lg:mt-14 place-items-center">
                <div>
                    <motion.h1
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="text-2xl text-center md:text-4-xl"
                    >Últimos <span className="text-[#f5741c]">trabajos realizados.</span>
                    </motion.h1>

                    <motion.div
                        className="flex flex-col items-center -mt-28 h-full gap-5 px-2 lg:flex-row"
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        {cardContent.map(({ id, title, imageUrl, description, skills }) => (
                            <motion.div key={id}
                                className={`card cursor-pointer h-[500px] bg-auto bg-no-repeat bg-center rounded-[20px] ${id === expandedIndex && 'expanded'}`}
                                initial={{ opacity: 1 }}
                                variants={cardVariants}
                                animate={id === expandedIndex ? 'expanded' : 'collapsed'}
                                exit={{
                                    opacity: 1
                                }}
                                transition={{ duration: 0.5 }}
                                onClick={() => handleClick(id)}
                                style={{
                                    backgroundImage: `url(/assets/${imageUrl})`,
                                    backgroundSize: 'contain', // Mostrar la imagen completa dentro del tamaño del contenedor
                                    backgroundPosition: 'center center' // Centrar la imagen en la tarjeta
                                }}
                            >
                                <div className="flex flex-col justify-end h-full">
                                    <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center p-3">
                                        <h2 className="text-xl font-semibold text-center text-white">{title}</h2>
                                        {id === expandedIndex && (
                                            <>
                                                <p>{description}</p>
                                                <div className="flex gap-5 mt-3">
                                                    {skills.map((data, index) => (
                                                        <p key={index}>{data.icon}</p>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

import { SiTailwindcss, SiMysql , SiReact, SiNextdotjs, SiCsharp } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { AvatarDos } from "./AvatarDos";

export const cardContent = [
    {
        id: 0,
        title: "Padelstore website",
        description: "Website project made with React and Tailwind CSS.",
        imageUrl: "/padelstore.jpg",
        skills: [
            {
                icon: <SiReact size="40" />
            },
            {
                icon: <SiTailwindcss size="40" />
            },
        ]
    },
    {
        id: 1,
        title: "Portfolio React",
        description: "Website project made with Nextjs and Tailwind CSS.",
        imageUrl: "/portafolio.jpg",
        skills: [
            {
                icon: <SiNextdotjs size="40" />
            },
            {
                icon: <SiTailwindcss size="40" />
            },
        ]
    },
    {
        id: 2,
        title: "Punto de venta",
        description: "Sistema de gestión de ventas y stock con c#",
        imageUrl: "/puntoVenta.jpg",
        skills: [
            {
                icon: <SiCsharp size="40" />
            },
            {
                icon: <SiMysql  size="40" />
            },
        ]
    },
    {
        id: 3,
        title: "Control de miembros de gimnasio",
        description: "Sistema de gimnasio desarrollado en c#",
        imageUrl: "/lifegym.jpg",
        skills: [
            {
                icon: <SiCsharp size="40" />
            },
            {
                icon: <PiFileSql size="40" />
            },
        ]
    },
];
