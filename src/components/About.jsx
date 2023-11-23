"use client";
import { motionTransitionsAbout } from "@/utils/motionTransitions";
import { fadeIn } from "@/utils/motionTransitions"
import { motion } from 'framer-motion';
import CountUp from "react-countup";
import { useState } from "react";
import { BiDownArrow, BiLeftArrow } from "react-icons/bi";
import Image from "next/image";

export function About() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="flex flex-col gap-x-5 lg:flex-row ">
        <motion.div variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit="hidden" className="relative mx-auto bg-gradient-to-b text-[#f5741c] rounded-full w-80 h-80 overflow-hidden mt-36 lg:mt-64 md:h-96 md:w-96">
          <Image src="/assets/fotoPerfil.jpg" layout='fill' objectFit='cover' />
        </motion.div>

        <div className="items-center text-center min-h-screen px-6 mx-auto align-middle mt-4 md:-mt-10 lg:mt-24 md:flex md:max-w-4xl pb-36 md:pb-0">
          <motion.div
            initial={motionTransitionsAbout.initial}
            animate={motionTransitionsAbout.animate}
            transition={motionTransitionsAbout.transition}
          >
            <h1 className="mb-6 md:text-4xl font-bold text-2xl">Programming <span className="text-[#f5741c]">Technician</span></h1>
            <p>Con sólidos conocimientos en desarrollo y programación de software.
              Apasionado por crear soluciones tecnológicas innovadoras y orientado al trabajo en equipo.
              Con experiencia en programación de proyectos y amplio conocimiento de herramientas de programación y
              idiomas. </p>

            <div className="grid justify-between grid-cols-2 gap-3 my-8 md:flex md:grid-cols-4 md:gap-6">
              {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }) => (
                <div key={id} className={`${lineRight ? 'ltr' : ''}`}>
                  <div className={`${lineRight ? 'px-4 border-2 border-transparent md:border-e-gray-100' : ''} ${lineRightMobile ? 'border-e-gray-100' : ''}`}>
                    <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
                      + <CountUp end={endCounter} start={0} duration={5} />
                    </p>
                    <p className="text-xs uppercase max-w-[100px]">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col mt-10 mb-3 md:flex-col justify-evenly md:mt-28 md:mb-5 lg:gap-5 lg:flex-row">
              {dataAboutSkills.map((dataText, itemIndex) => {
                const { id, text } = dataText;

                return (
                  <div key={id}
                    className={`${index === id ? 'text-[#f5741c] duration-300 transition-all border-secondary' : 'border-white'} 
                                        cursor-pointer md:text-lg relative px-2 md:px-8 py-4 border-2 rounded-xl flex justify-between items-center my-3`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    <p className="mr-4 text-md md:text-lg">{text}</p>
                    {index === id ? (
                      <BiDownArrow />
                    ) : (
                      <BiLeftArrow />
                    )}
                  </div>
                )
              })}
            </div>
            <div className="max-w-4xl p-4 mx-auto bg-[#f5741c]/20 rounded-xl gap-9">
              {dataAboutSkills[index].skills.map((items, index) => (
                <div key={index} className="flex justify-center max-w-md gap-4 mx-auto">
                  <span>{items.title} {" "} </span> - <span>{items.date}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export const dataCounter = [
  {
    id: 0,
    endCounter: 2,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 10,
    text: "Clientes satisfechos",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 14,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
];

export const dataAboutSkills = [
  {
    id: 0,
    text: "Programming languages",
    skills: [
      {
        title: "C#",
        date: "2021",
      },
      {
        title: "JavaScript",
        date: "2021",
      },
    ],
  },
  {
    id: 1,
    text: "Frameworks",
    skills: [
      {
        title: "React.js",
        date: "2022",
      },
      {
        title: "Next.js:",
        date: "2023",
      },
    ],
  },
  {
    id: 2,
    text: "Databases",
    skills: [
      {
        title: "MySQL",
        date: "2022",
      },
      {
        title: "SQLServer",
        date: "2022",
      },
      {
        title: "SQLite",
        date: "2022",
      },
    ],
  },
  {
    id: 3,
    text: "Education",
    skills: [
      {
        title: "Bachiller con orientación en Economía",
        date: "2015-2020",
      },
      {
        title: "Técnico Superior en Programación",
        date: "2021-2023",
      },
    ],
  }
];
