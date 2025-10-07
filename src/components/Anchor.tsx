"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Anchor({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      className={
        pathname === href ? "text-red border-red h-fit border-b font-bold" : ""
      }
      href={href}
    >
      {title}
    </Link>
  );
}
