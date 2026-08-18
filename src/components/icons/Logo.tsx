"use client";
import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src="/images/logos/logo-mobile.svg"
        width="112"
        height="95"
        alt="Номаран – Память имен"
        className="block md:hidden"
      />
      <Image
        src="/images/logos/logo-tablet.svg"
        width="121"
        height="112"
        alt="Номаран – Память имен"
        className="hidden md:block xl:hidden"
      />
      <Image
        src="/images/logos/logo-desktop.svg"
        width="145"
        height="135"
        alt="Номаран – Память имен"
        className="hidden xl:block 2xl:hidden"
      />
      <Image
        src="/images/logos/logo-desktop.svg"
        width="218"
        height="208"
        alt="Номаран – Память имен"
        className="hidden 2xl:block"
      />
    </>
  );
}
