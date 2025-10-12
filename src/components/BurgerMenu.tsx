"use client";
import { useState } from "react";
import Links from "./Links";
import SearchAnchorButton from "./SearchAnchorButton";
import MenuToggle from "./icons/MenuToggle";
import { cn } from "@/utils/cn";
import Cross from "./icons/Cross";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuToggle onClick={() => setOpen(!open)} />

      <div
        className={cn(
          "fixed top-0 left-[150%] z-20 overflow-hidden transition-all duration-300 ease-in-out",
          "h-screen w-screen bg-[url(/images/body-bg.jpg)] bg-cover bg-center bg-no-repeat",
          "flex flex-col items-center justify-center gap-7.5",
          open ? "left-0" : "",
        )}
      >
        <Links
          handleClick={() => setOpen(false)}
          className="text-[20px] text-black"
        />
        <SearchAnchorButton />

        <button
          className="absolute top-[5%] right-[5%]"
          onClick={() => setOpen(false)}
        >
          <Cross />
        </button>
      </div>
    </>
  );
}
