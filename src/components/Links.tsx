"use client";
import { links } from "@/constants/links";
import Anchor from "./ui/Anchor";
import { cn } from "@/utils/cn";

export default function Links({
  className,
  handleClick,
}: {
  className?: string;
  handleClick?: () => void;
}) {
  return (
    <nav className={cn("flex flex-col items-center gap-4")}>
      {[
        ...links,
        {
          title: "Контакты",
          href: "/contacts",
          className: "text-[20px] xl:hidden",
        },
      ].map((link, i) => (
        <Anchor
          {...link}
          key={i}
          handleClick={handleClick}
          className={cn(className, link.className)}
        />
      ))}
    </nav>
  );
}
