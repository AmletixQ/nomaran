"use client";
import Logo from "./icons/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import SearchAnchorButton from "./SearchAnchorButton";
import { links } from "@/constants/links";
import Anchor from "./ui/Anchor";
import BurgerMenu from "./ui/BurgerMenu";

export default function Header() {
  const pathname = usePathname();
  const isHeroPage = pathname === "/" || pathname === "/search";

  return (
    <header
      className={cn(
        "relative z-10 flex h-(--header-height) w-full items-start justify-between",
        "box-border pt-3 lg:pt-5 2xl:pt-10",
        isHeroPage ? "text-white" : "text-black",
      )}
    >
      <Link className="rounded p-1" href="/">
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
