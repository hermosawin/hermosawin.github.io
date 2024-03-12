"use client"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";

import { useState } from "react";

function Img(props:any) {
    return (<Image className="cursor-pointer" onClick={() => window.location.href = props.src} src={props.src} width={props.width} height={props.height} alt={props.alt} />)
}

const items = [
  {
    title: "Desktop",
    description: (
      <Img src="Desktop.png" width={300} height={300} alt=""></Img>
    ),
  },
  {
    title: "Desktop (Dark mode)",
    description: (
      <Img src="Dark_Desktop.png" width={300} height={300} alt=""></Img>
    ),
  },
  {
    title: "Windows installer",
    description: (
      <Img src="Installer.png" width={300} height={300} alt=""></Img>
    ),
  },
  {
    title: "Lock screen",
    description: (
      <Img src="Lockscreen.png" width={300} height={300} alt=""></Img>
    ),
  },
  {
    title: "Desktop (Glow theme)",
    description: (
      <Img src="Desktop_Glow.png" width={300} height={300} alt=""></Img>
    ),
  },
  {
    title: "Desktop (Captured Motion theme)",
    description: (
      <Img src="Desktop_Motion.png" width={300} height={300} alt=""></Img>
    ),
  },
  {
    title: "Desktop (Sun Valley theme)",
    description: (
      <Img src="Desktop_Sun_Valley.png" width={300} height={300} alt=""></Img>
    ),
  },
  {
    title: "Desktop (Flow theme)",
    description: (
      <Img src="Desktop_Flow.png" width={300} height={300} alt=""></Img>
    ),
  },
  {
    title: "Desktop + Winver",
    description: (
      <Img src="Desktop_Winver.png" width={300} height={300} alt=""></Img>
    ),
  },
  {
    title: "Start menu",
    description: (
      <Img src="Start.png" width={300} height={300} alt=""></Img>
    ),
  },
  {
    title: "Notepad and Paint",
    description: (
      <Img src="Notepad_Paint.png" width={300} height={300} alt=""></Img>
    ),
  },
  {
    title: "Desktop + Sidebar",
    description: (
      <Img src="sidebar.png" width={300} height={300} alt=""></Img>
    ),
  },
  {
    title: "File Explorer",
    description: (
      <Img src="explorer.png" width={300} height={300} alt=""></Img>
    ),
  },
  {
    title: "RAM Usage",
    description: (
      <Img src="RAM.png" width={300} height={300} alt=""></Img>
    ),
  },
  {
    title: "CPU Usage",
    description: (
      <Img src="CPU.png" width={300} height={300} alt=""></Img>
    ),
  },

];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 pt-8">
      <h1 className="text-5xl text-white font-bold mb-4">Screenshots</h1>
      <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<></>}
          icon={<></>}
        />
      ))}
    </BentoGrid>
    </main>
  );
}
