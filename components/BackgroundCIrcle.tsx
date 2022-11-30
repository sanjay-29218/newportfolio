import React from 'react'
import {motion} from 'framer-motion'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
type Props = {}

export default function BackgroundCIrcle({}: Props) {
  const [text] = useTypewriter({
    words: ['FRONTEND dev'],
    loop:1,
    delaySpeed: 1000,
  })
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:[.2,.4,.6,.8,1],
    scale:[1.5,1,1,1],
    borderRadius:['20%','0']
    }}
    transition={{duration:2.5}}
    
    className='relative flex justify-center items-center  h-screen '>
     <div className="absolute  h-[350px] w-[350px] top-1/2 left-1/2 border border-gray-500 rounded-full translate-x-[-50%] translate-y-[-50%]
      animate-pulse md:w-[600px] md:h-[600px] "></div>
      
     <div className="absolute h-[100px] w-[100px]  animate-ping border border-gray-500 rounded-full 
       md:h-[200px] md:w-[200px] "></div>
      
       <img src='/me.jpg' className=' absolute border object-cover [#333333] rounded-full h-[100px] w-[100px] '/>
        <img/>
        <div className="flex-row mt-[10rem]">
        <div className=' text-2xl font-light text-center  md:text-4xl  '>SANJAY POUDEL</div> 
        <div className=' text-sm uppercase font-medium text-center  text-gray-300 tracking-[15px] md:text-md  '>{text}</div> 
        </div>
    </motion.div>
  )
}