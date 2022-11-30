import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div
    initial={{opacity:0,  x:-100}}
    whileInView={{opacity:1, x:0}}
    transition={{delay:0.2}}
     className='h-screen relative overflow-hidden flex flex-col text-left md:flex-row px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'></h3>
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
    </motion.div>
  )
}