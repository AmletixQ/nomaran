"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import SearchAnchorButton from "./SearchAnchorButton";
import BurgerMenu from "./ui/BurgerMenu";
import Anchor from "./ui/Anchor";
import Logo from "./icons/Logo";

import { links } from "@/constants/links";
import { cn } from "@/utils/cn";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "absolute w-[95%]",
        "flex justify-between",
        "mt-3 lg:mt-5 2xl:mt-10",
        ["/", "/search"].includes(pathname) ? "text-white" : "text-black",
      )}
    >
      <Link className={cn("rounded p-1")} href="/">
        <Logo />
      </Link>

      <nav className="hidden h-fit gap-7.5 pt-4 text-[18px] xl:flex">
        {links.map((link, i) => (
          <Anchor {...link} key={i} />
        ))}
      </nav>

      <SearchAnchorButton
        pathname={pathname}
        className="hidden lg:text-[17px] xl:flex"
      />

      <BurgerMenu />
    </header>
  );
}
