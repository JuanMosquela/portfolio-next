"use client";

import About from "@/components/about";
import Header from "@/components/header";
import Separator from "@/components/separator";

export default function Home() {
  return (
    <main className="min-h-[200vh] ">
      <Header />
      <Separator />
      <About />
    </main>
  );
}
