import SectionHeading from "./heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] mx-auto leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      viewport={{ once: true }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned
        <span className="font-medium">full-stack web development</span>.
        Currently, I am committed to my continuous growth and expanding my
        knowledge, which is why I am studying at the National Technological
        University, where I am pursuing a degree in programming and systems.
        This opportunity allows me to deepen my technical skills and understand
        the more advanced aspects of programming.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React, Next.js, Node.js, and SQL</span>
        . I am also familiar with
        <span className="font-medium">TypeScript and .NET</span>. I am always
        looking to learn new technologies. I am currently looking for a
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy
        <span className="font-medium">learning new things</span>. I am currently
        learning about
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
