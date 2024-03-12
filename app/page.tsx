"use client"
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

import { useState } from "react";

const items = [
  {
    title: "Desktop",
    description: (
      <Image src="/hermosa.png" width={300} height={300} alt=""></Image>
    ),
  },
  {
    title: "Desktop (Dark mode)",
    description: (
      <Image src="/hermosa.png" width={300} height={300} alt=""></Image>
    ),
  },
  {
    title: "Desktop",
    description: (
      <Image src="/hermosa.png" width={300} height={300} alt=""></Image>
    ),
  },
  {
    title: "Desktop (Dark mode)",
    description: (
      <Image src="/hermosa.png" width={300} height={300} alt=""></Image>
    ),
  },
  {
    title: "Desktop",
    description: (
      <Image src="/hermosa.png" width={300} height={300} alt=""></Image>
    ),
  },
  {
    title: "Desktop (Dark mode)",
    description: (
      <Image src="/hermosa.png" width={300} height={300} alt=""></Image>
    ),
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 pt-8">
      <h1 className="text-5xl text-white font-bold mb-4">Project Hermosa</h1>

      <TextGenerateEffect
        words={"Windows Sun valley, the way it should've been"}
        className="text-white font-normal"
      ></TextGenerateEffect>
      <MacbookScroll src="Dark_Desktop.png" />
    </main>
  );
}
