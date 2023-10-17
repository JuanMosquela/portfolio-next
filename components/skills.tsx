import React from "react";
import SectionHeading from "./heading";
import { skills } from "@/constants/skills";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
    },
  }),
};

export default function Skills() {
  return (
    <motion.section
      className=" mb-28 max-w-[45rem] mx-auto leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="skills"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex justify-center  flex-wrap  gap-2">
        {skills.map((skill, index) => (
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={variants}
            custom={index}
            className="group hover:!translate-y-[-7px] duration-150"
          >
            <div className="rounded-full shadow-md shadow-black/[0.03] border-opacity-80 w-20 h-20  flex items-center  justify-center flex-col hover:scale-110 duration-150 delay-75 transition-all ">
              <Image src={skill.icon} width={38} alt={`${skill.title} icon`} />
            </div>
            <h4
              className={cn(
                "opacity-0  group-hover:opacity-100 text-center duration-150 capitalize"
              )}
            >
              {skill.title}
            </h4>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
