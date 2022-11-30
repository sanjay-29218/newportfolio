import React,{useState} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BsPersonFill} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'
import {MdContacts} from 'react-icons/md'
import {FiSettings} from 'react-icons/fi'
import Link from 'next/link'
type Props = {}

export default function Nav({}: Props) {
  const [active, setActive] = useState('hero')
  return (
   
    <div className='flex gap-5  fixed bottom-12 text-3xl  left-[50%] -translate-x-[50%] z-[999]  backdrop-blur-sm '>
    <a href={'#hero'} onClick={()=>{setActive('hero')}}  className={active==='hero'?"active":''}><AiFillHome className='navbtn'   /></a>
    <a href={'#about'} onClick={()=>{setActive('about')}} className={active==='about'?"active":''}><BsPersonFill className='navbtn'  /></a>
    <a href={'#projects'} onClick={()=>{setActive('projects')}} className={active==='projects'?"active":''}><GrProjects className='navbtn' /></a>
    <a href={'#skill'} onClick={()=>{setActive('skill')}} className={active==='skill'?"active":''}><FiSettings className='navbtn'/></a>
    <a href={'#contact'} onClick={()=>{setActive('contact')}} className={active==='contact'?"active":''}><MdContacts className='navbtn' /></a>

    

    </div>
    
  )
}
