import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

export default function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      name: "LinkedIn Clone",
      description:
        "A clone of the LinkedIn website with the same functionality as the original website.",
      image: "/linkedin.png",
      live: "https://linkedin-clone-6c8d0.web.app/",
      github: "https://github.com/sanjay-29218/LInkedin-clone",
    },
    {
      id: 2,
      name: "Spotify Clone",
      description:
        "A clone of the Spotify website with the same functionality as the original website.",
      image: "/spotify.png",
      github: "https://github.com/sanjay-29218/Spotify-CLone",
      // link:"https://spotify-clone-29218.vercel.app/"
    },
    {
      id: 3,
      name: "Music Recommender using Emotion Recognition",
      description:
        "A music recommender system that recommends music based on the emotion of the user.",
      image: "/musicrecommender.png",
      github: "https://github.com/sanjay-29218/FinalYearProjectRemastered",
    },
    
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="relative pt-[5rem] flex overflow-hidden  flex-col text-left
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0  "
    >
      <h3
        className="absolute top-20 uppercase tracking-[20px] text-gray-500
    text-2xl"
      >
        Projects
      </h3>
      <div className="relative w-full h-screen  flex overflow-x-scroll scrollbar-thin scrollbar-thumb-amber-300 overflow-y-hidden z-20 snap-x snap-mandatory p-32     ">
        {projects.map((project, index) => (
          <div className=" w-screen  flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:pd-44 h-screen  ">
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              src={project.image}
              alt=""
              className="h-[20rem] rounded-md "
            />
            <div className="">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#f7ABBA] ">
                  {index + 1} of {projects.length}:
                </span>{" "}
                {project.name}  
              </h4>
              <div className="flex items-center justify-center  gap-4 p-5 ">
                {project.live && (
                  <button className="bg-[#f7ab0a] p-4  rounded-sm">
                    <Link href={project.live}>Live </Link>
                  </button>
                )}
                <button className="bg-[#f7ab0a] p-4 rounded-sm">
                  <Link href={project.github}>GitHub</Link>
                </button>
              </div>
              <p className="text-sm font-semi-bold text-center pb-[5rem] md:text-left">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-full absolute top-[30%] bg-[#f7AB0A]/10 left-0 
    h-[500px] -skew-y-12 "
      ></div>
    </motion.div>
  );
}
