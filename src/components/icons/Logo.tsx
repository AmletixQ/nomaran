"use client";
import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src="/images/logo-mobile.svg"
        width="112"
        height="95"
        alt="logo"
        className="block md:hidden"
      />
      <Image
        src="/images/logos/logo-tablet.svg"
        width="121"
        height="112"
        alt="logo"
        className="hidden md:block xl:hidden"
      />
      <Image
        src="/images/logos/logo-desktop.svg"
        width="145"
        height="135"
        alt="logo"
        className="hidden xl:block 2xl:hidden"
      />
      <Image
        src="/images/logos/logo-desktop.svg"
        width="218"
        height="208"
        alt="logo"
        className="hidden 2xl:block"
      />
    </>
  );
}
