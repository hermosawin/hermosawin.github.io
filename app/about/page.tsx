"use client"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/moving-border";
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
      <h1 className="text-5xl text-white font-bold mb-4">About</h1>

     <TextGenerateEffect
        words={"Windows Sun valley, the way it should've been"}
        className="text-white font-normal"
      ></TextGenerateEffect>
      <h1 className="text-4xl text-white font-semibold my-6">Meet Hermosa</h1>
      <p className="px-[15%]">
        Back in 2021, Microsoft started teasing "the biggest update to Windows
        ever made". That update turned out to be Windows 11: an OS that a lot of
        peaple consider a bloated mess. With a lot of removed or discontinued
        features, some very questionable "security" requirements and more bloat
        than Windows 10, this OS was hated by many. So, I decided to work on
        Windows "Sun Valley", the way it should've been.
      </p>
    </main>
  );
}
