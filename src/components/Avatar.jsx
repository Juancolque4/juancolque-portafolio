"use client"
import { fadeIn } from "@/utils/motionTransitions"
import { motion } from "framer-motion"
import Image from "next/image"

const Avatar = () => {
    return (
        <motion.div variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit="hidden" className="bottom-0 right-0 hidden lg:inline-block lg:absolute">   
            <Image src="/assets/robot2.png" width="400" height="400" className="w-full h-full" />
        </motion.div>

    )
}

export default Avatar