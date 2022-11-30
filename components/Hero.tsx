import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgorundCircle from './BackgroundCIrcle'
type Props = {}

export default function Hero({}: Props) {
  const [text] = useTypewriter({
    words: ['<Eat/>',  '<Code/>', '<Sleep/>','<Repeat/>'],
    loop:true,
    delaySpeed: 1000,
  })

  return (
    <div className='relative ' >
      <BackgorundCircle />
       <div className=' absolute top-2/3 left-1/2 translate-x-[-50%]  text-center pt-[2rem] text-[1rem] text-white md:text-[2rem] '>
          {text}
          <Cursor cursorColor='blue' />
       </div>
    </div>
  )
}