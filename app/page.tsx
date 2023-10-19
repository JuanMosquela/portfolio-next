"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Separator from "@/components/separator";
import Skills from "@/components/skills";
import Timeline from "@/components/timeline";

export default function Home() {
  return (
    <main className="min-h-[200vh] ">
      <Header />
      <Separator />
      <About />
      <Projects />

      <Skills />
      <Timeline />
      <Contact />
    </main>
  );
}
