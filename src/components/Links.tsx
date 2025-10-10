"use client";
import { links } from "@/constants/links";
import Anchor from "./Anchor";

export default function Links({ className }: { className?: string }) {
  return (
    <nav className="flex flex-col items-center gap-4">
      {links.map((link, i) => (
        <Anchor {...link} key={i} className={className} />
      ))}
    </nav>
  );
}
