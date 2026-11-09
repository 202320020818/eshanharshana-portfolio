"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex h-[240px] w-full items-center justify-center sm:h-[320px] 2xl:h-[420px]">
      <div className="relative h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] 2xl:h-[400px] 2xl:w-[400px]">
        <Image
          src="/assets/eshan.png"
          priority
          quality={90}
          fill
          sizes="(min-width: 1536px) 400px, (min-width: 640px) 300px, 220px"
          alt="Eshan Harshana"
          className="rounded-full object-cover object-[center_25%]"
        />

        <motion.svg
          className="pointer-events-none absolute inset-[-5px] h-[calc(100%+10px)] w-[calc(100%+10px)]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="249"
            stroke="#38b497"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 128 25 25", "16 25 92 72", "4 258 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default Photo;
