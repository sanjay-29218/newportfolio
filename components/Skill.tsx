import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  src?: string;
  percentage?: string;
};

export default function Skill({ directionLeft, src, percentage }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={src}
        className=" rounded-full h-20 w-20 md:h-24 md:w-24 group-hover:grayscale"
      />
      <div className="absolute top-0  opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:h-24 md:w-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {percentage}
          </p>
        </div>
      </div>
    </div>
  );
}
