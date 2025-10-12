"use client";
import { links } from "@/constants/links";
import Anchor from "./ui/Anchor";

export default function Links({
  className,
  handleClick,
}: {
  className?: string;
  handleClick?: () => void;
}) {
  return (
    <nav className="flex flex-col items-center gap-4">
      {links.map((link, i) => (
        <Anchor
          {...link}
          key={i}
          handleClick={handleClick}
          className={className}
        />
      ))}
    </nav>
  );
}
