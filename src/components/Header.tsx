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
  const isHeroPage = pathname === "/" || pathname === "/search";

  return (
    <header
      className={cn(
        "z-10 w-full",
        isHeroPage
          ? "absolute inset-x-0 top-0 text-white"
          : "relative mb-2 text-black",
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-(--header-height) w-[95%] items-start justify-between",
          "box-border pt-3 lg:pt-5 2xl:pt-10",
        )}
      >
        <Link className="rounded p-1" href="/">
          <Logo />
        </Link>

        <nav className="hidden h-fit gap-5 pt-4 text-[18px] xl:flex">
          {links.map((link, i) => (
            <Anchor {...link} key={i} />
          ))}
        </nav>
        <SearchAnchorButton
          pathname={pathname}
          className="hidden lg:text-[17px] xl:flex"
        />

        <BurgerMenu />
      </div>
    </header>
  );
}
