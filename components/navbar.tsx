"use client";

import { navbarLinks } from "@/constants/navbar";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="relative flex justify-center z-[999] ">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bg-white bg-opacity-80 backdrop-blur-[0.5rem] shadow-lg shadow-black/[0.03] border-opacity-40  rounded-full mx-auto w-fit top-4 dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 "
      >
        <ul className="flex gap-4 px-2 py-2 md:py-4 md:px-6 ">
          {navbarLinks.map((item) => (
            <Link
              key={item.hash}
              href={item.hash}
              className="text-sm md:text-md lg:text-lg text-semibold"
            >
              {item.title}
            </Link>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
};

export default Navbar;
