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
        ["/", "/search"].includes(pathname) ? "text-white" : "text-black",
      )}
    >
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex h-fit items-center justify-start gap-7">
        <div className="flex gap-7.5">
          {links.map((link, i) => (
            <Anchor {...link} key={i} />
          ))}
        </div>

        <Link
          href="/search"
          className={cn(
            "flex h-fit cursor-pointer items-center gap-2.5",
            "rounded-[10px] px-5.5 py-4 font-bold",
            ["/", "/search"].includes(pathname)
              ? "bg-white/60"
              : "bg-red text-white",
          )}
        >
          Поиск репрессированных
          <Search />
        </Link>
      </div>
    </header>
  );
}
