import svgIcon from "@/public/coding.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { HiOutlineArrowNarrowRight, HiDownload } from "react-icons/hi";

export default function Header() {
  return (
    <div className="flex flex-wrap  gap-10 items-center mt-28 mb-36">
      <div>
        <motion.h1
          className="mb-6 mt-4 max-w-[668px] text-center lg:text-left  text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="font-bold">Hello, I'm Juan.</span> I'm a
          <span className="font-bold">full-stack developer</span>. I enjoy
          building <span className="italic">sites & apps</span>. My focus is
          <span className="underline">React (Next.js)</span>.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3 justify-center lg:justify-start"
        >
          <Button className="rounded-full text-sm md:text-md py-4 px-3 md:px-6">
            Contact me here
            <HiOutlineArrowNarrowRight className="ml-1 md:ml-3 " scale={0.1} />
          </Button>
          <Button
            className="rounded-full text-sm md:text-md py-4 px-3 md:px-6 text-slate-700"
            variant="outline"
          >
            <a href="/juan-developer-cv.pdf" download>
              Download CV
            </a>

            <HiDownload className="ml-1 md:ml-3" scale={0.1} />
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: 0.4 }}
      >
        <Image src={svgIcon} width={520} alt="Logo" />
      </motion.div>
    </div>
  );
}
