import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import About from '../components/About'
import Nav from '../components/Nav'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import {useForm, SubmitHandler } from 'react-hook-form';
export default function Home() {
  return (
    <div className='m-0 p-0 bg-gray-600 w-screen overflow-hidden '>  
      <Head>
        <title>Sanjay's Portfolio</title>
      </Head>
     <Header/>
     {/* Navbar  */}
     <Nav/>

     {/* Hero */}
     <section  className='h-screen snap-start snap-mandatory ' id='hero' >
      <Hero/>
     </section>
     {/* About */}
     <section id="about" className='snap-center' >
      <About/>
     </section>
    {/* Experience */}
      {/* <section id='experience' className=''>
        <Experience />

      </section> */}
     
     {/* Projects Showcase */}
     <section id='projects' className='snap-center'>
      <Projects/>
      </section>

      {/* Skill Show Case */}
     <section id='skill' className='snap-start'>
      <Skills/>

      
     </section>

     {/* Contacts */}
    <section id="contact">
      <Contact/>
    </section>

      
    </div>
  )
}
