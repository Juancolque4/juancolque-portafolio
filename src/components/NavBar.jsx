"use client";
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motionTransitions';
import { RiHome4Line, RiAccountPinCircleLine, RiServerLine, RiBriefcase2Line, RiChatPollLine } from "react-icons/ri";
import Link from 'next/link';

export function Navbar() {
    const pathName = usePathname();

    const dataNavbar = [
        {
            name: "home",
            path: "/",
            icon: <RiHome4Line size="30" />,
        },
        {
            name: "about",
            path: "/about",
            icon: <RiAccountPinCircleLine size="30" />,
        },
        {
            name: "services",
            path: "/services",
            icon: <RiServerLine size="30" />,
        },
        {
            name: "work",
            path: "/works",
            icon: <RiBriefcase2Line size="30" />,
        },
    ];

    return (
        <motion.div
            className="fixed bottom-0 z-20 flex flex-col items-center w-full mt-auto md:justify-center h-max md:top-1/4 md:right-10 md:w-16 md:max-w-md md:h-screen"
            variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit="hidden"
        >
            <div className="flex items-center justify-between w-full px-4 py-3 md:py-8 md:flex-col md:justify-center gap-y-10 md:px-4 md:h-max bg-white/10 backdrop-blur-sm md:rounded-full">
                {dataNavbar.map(({ name, path, icon }) => (
                    <div key={name}>
                        <Link href={path} className={`${path === pathName && 'currentIconPage'} group transition-all duration-300`} style={{outline:'none' }}>
                            <div className="absolute right-0 hidden mr-20 rounded-sm md:group-hover:flex md:group-hover:items-center">
                                <div className="relative flex items-center p-2 leading-none text-black capitalize bg-white rounded-sm">
                                    {name}
                                </div>
                                <div className="absolute border-l-8 border-r-0 border-solid border-l-white border-y-transparent border-y-4 -right-2" />
                            </div>
                            {icon}
                        </Link>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default Navbar;
