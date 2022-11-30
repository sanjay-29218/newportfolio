import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0,x:-100}}
    animate={{opacity:1,x:0}}
    transition={{delay:0.5}}
    className='h-screen flex relative flex-col text-center 
    md:text-left xl:flex-row w-screen  xl:px-30 min-h-screen justify-center
    xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px]
         text-gray-500 text-2xl'>
        Skills
        </h3>
        <h3 className='absolute top-36 uppercase tracking-[5px]
         text-gray-900 text-sm md:text-md md:tracking-[10px]'>Hover over a slill for current proficincy</h3>

   <div className="grid grid-cols-3 gap-8 pt-5">
    <Skill directionLeft={true} src={'/html.webp'} percentage={"90%"}/>
    <Skill directionLeft={true} src={'/css.png'} percentage={"90%"}/>
    <Skill directionLeft={true} src={'/javascript.png'} percentage={"70%"}/>
    <Skill directionLeft={true} src={'/react.png'} percentage={"60%"}/>
    <Skill directionLeft={true} src={'/next.png'} percentage={"60%"}/>
    <Skill directionLeft={false} src={'/typescript.jpg'} percentage={"70%"}/>
    <Skill directionLeft={false} src={'tailwind.png'} percentage={"80%"}/>
    <Skill directionLeft={false} src={'firebase.png'} percentage={"70%"}/>
    <Skill directionLeft={false} src={'saas.png'} percentage={"80%"}/>
   </div>
    </motion.div>
  )
}