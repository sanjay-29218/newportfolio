import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function About({ }: Props) {
  return (
    <motion.div
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    // viewport={{ once: true }} // does only one time
    transition={{ duration: 1.2 }}
    
    className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h1 className=' absolute top-0 uppercase tracking-[20px] text-2xl text-gray-500  '>About</h1>
      <motion.img
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        // viewport={{ once: true }} // does only one time
        transition={{ duration: 1.2 }}


        src='/me.jpg' className=' rounded-full mt-[5rem] h-[10rem] w-[10rem]  object-cover md:rounded-medium lg:rounded-sm md:h-[15rem] md:mt-[5rem] md:w-[15rem]  lg:h-2/3 lg:w-1/3  lg:rounded-none  ' />
      <div className=' px-0 md:px-10' >
        <h4 className='text-2xl font-semibold pt-10 text-white mb-10 '>Here is the <span className='underline decoration-wavy'>little</span> Backgound</h4>
        <p className=' text-gray-50 text-justify md:p-10'>Innovative Front End Developer with 1 year+ of experience building and maintaining responsive websites. Proficient in HTML, CSS, JavaScript, and React plus modern libraries and frameworks. Passionate about usability and possess working knowledge of Figma </p>
      </div>

    </motion.div>
  )
}