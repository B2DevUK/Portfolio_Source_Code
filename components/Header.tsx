import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center overflow-hidden">
        {/* Social Icons*/}
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }} 
        transition={{
            duration: 1.25,
        }}
        className='flex flex-row items-center'>
        
            <SocialIcon url="https://github.com/B2DevUK" 
            bgColor='transparent'
            fgColor='grey'
            />
            <SocialIcon url="https://www.linkedin.com/in/b2devuk/" 
            bgColor='transparent'
            fgColor='grey'
            />
            
        </motion.div>











        {/* Get in touch with me*/}

        <motion.div 
        initial={{
            x: +500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }} 
        transition={{
            duration: 1.25,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor='grey'
            bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Contact Me!</p>
        </motion.div>
    </header>
  )
}