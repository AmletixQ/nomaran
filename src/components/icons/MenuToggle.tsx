"use client";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { ButtonHTMLAttributes } from "react";

export default function MenuToggle({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const pathname = usePathname();
  const isHeroPage = pathname === "/";

  // Whether we are on the search page
  const isSearchPage = pathname === "/search";

  // Returns className for the burger rects according to route and screen
  const getRectClass = () => {
    if (isHeroPage) return "fill-white";
    if (isSearchPage) return "fill-white";
    return "fill-black";
  };

  return (
    <button
      {...props}
      className={cn(
        "h-fit xl:hidden",
        pathname === "/" ? "hidden md:block" : "",
      )}
    >
      <svg
        width="32"
        height="32"
        className="sm:h-10 sm:w-10"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6.53687"
          y="7.09717"
          width="18.9265"
          height="1.57721"
          className={getRectClass()}
        />
        <rect
          x="6.53687"
          y="14.9834"
          width="18.9265"
          height="1.57721"
          className={getRectClass()}
        />
        <rect
          x="6.53687"
          y="22.8696"
          width="18.9265"
          height="1.57721"
          className={getRectClass()}
        />
      </svg>
    </button>
  );
}
