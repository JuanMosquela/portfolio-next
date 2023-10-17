"use client";

import React from "react";
import SectionHeading from "./heading";

import { experience } from "@/constants/education";

import { motion } from "framer-motion";
import school from "@/public/school.svg";
import check from "@/public/check.svg";
import Image from "next/image";
import { once } from "events";

const variants = {
  initial: (index: number) => ({ opacity: 0, x: index % 2 == 0 ? 25 : -25 }),
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
    },
  },
};

export default function Timeline() {
  return (
    <section id="experience">
      <SectionHeading>Education</SectionHeading>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        {experience.map((item, index) => (
          <motion.div
            initial="initial"
            variants={variants}
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active duration-200"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Image
                src={item.place.toLowerCase() == "coderhouse" ? check : school}
                width={24}
                alt="logo"
              />
            </div>

            <article className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <h4 className="font-bold text-slate-900 capitalize">
                  {item.title}
                </h4>
                <time className="font-caveat font-medium text-indigo-500">
                  {item.date}
                </time>
              </div>
              <h5 className=" text-slate-900 capitalize mb-3">{item.place}</h5>
              <p className="text-slate-500">{item.text}</p>
            </article>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
