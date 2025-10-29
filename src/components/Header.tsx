"use client";
import Logo from "./icons/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import SearchAnchorButton from "./SearchAnchorButton";
import { links } from "@/constants/links";
import Anchor from "./ui/Anchor";
import BurgerMenu from "./ui/BurgerMenu";
import { useEffect } from "react";

export default function Header() {
  const pathname = usePathname();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let isMobile: boolean = false;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    isMobile = window.innerWidth < 768;
  }, []);

  return (
    <header
      className={cn(
        "absolute w-[95%]",
        "flex justify-between",
        "mt-3 lg:mt-5 2xl:mt-10",
        ["/", "/search"].includes(pathname) ? "text-white" : "text-black",
      )}
    >
      <Link href="/">
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
