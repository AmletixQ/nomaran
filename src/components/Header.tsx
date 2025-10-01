"use client";
import { links } from "@/constants/links";
import Anchor from "./Anchor";
import Logo from "./icons/Logo";
import Search from "./icons/Search";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "flex",
        "justify-between",
        pathname === "/" ? "text-white" : "text-black"
      )}
    >
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex gap-7.5">
        {links.map((link, i) => (
          <Anchor {...link} key={i} />
        ))}
      </div>

      <Search />
    </header>
  );
}
