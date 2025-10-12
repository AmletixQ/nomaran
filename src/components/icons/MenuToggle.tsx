"use client";
import { usePathname } from "next/navigation";
import { ButtonHTMLAttributes } from "react";

export default function MenuToggle(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const pathname = usePathname();

  const color = ["/", "/search"].includes(pathname) ? "white" : "black";

  return (
    <button {...props} className="h-fit xl:hidden">
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
          fill={color}
        />
        <rect
          x="6.53687"
          y="14.9834"
          width="18.9265"
          height="1.57721"
          fill={color}
        />
        <rect
          x="6.53687"
          y="22.8696"
          width="18.9265"
          height="1.57721"
          fill={color}
        />
      </svg>
    </button>
  );
}
