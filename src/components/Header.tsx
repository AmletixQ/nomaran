"use client";
import Logo from "./icons/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import SearchAnchorButton from "./SearchAnchorButton";
import Links from "./Links";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "absolute w-[95%]",
        "flex justify-between",
        "mt-3 2xl:mt-10",
        ["/", "/search"].includes(pathname) ? "text-white" : "text-black",
      )}
    >
      <Link href="/">
        <Logo />
      </Link>

      <div className="hidden h-fit gap-7.5 pt-4 2xl:flex">
        <Links />
      </div>

      <SearchAnchorButton pathname={pathname} className="hidden 2xl:block" />

      <BurgerMenu />
    </header>
  );
}
