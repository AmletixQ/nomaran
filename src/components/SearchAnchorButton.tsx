"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Search from "./icons/Search";

interface ISearchButton {
  pathname?: string;
  className?: string;
  handleClick?: () => void;
}

export default function SearchAnchorButton({
  pathname,
  className,
  handleClick,
}: ISearchButton) {
  return (
    <Link
      href="/search"
      onClick={handleClick}
      className={cn(
        "flex h-fit cursor-pointer items-center gap-2.5 text-[18px]",
        "rounded-[10px] px-3 py-3 font-bold md:text-[20px]",
        ["/", "/search"].includes(pathname!)
          ? "bg-white/60"
          : "bg-red text-white",
        className,
      )}
    >
      Поиск репрессированных
      <Search />
    </Link>
  );
}
