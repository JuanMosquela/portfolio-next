"use client";

import About from "@/components/about";
import Header from "@/components/header";
import Separator from "@/components/separator";
import Skills from "@/components/skills";
import Timeline from "@/components/timeline";

export default function Home() {
  return (
    <main className="min-h-[200vh] ">
      <Header />
      <Separator />
      <About />
      <Skills />
      <Timeline />
    </main>
  );
}
