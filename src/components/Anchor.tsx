"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IAnchorProps {
  title: string;
  href: string;
  className?: string;
}

export default function Anchor({ title, href, className }: IAnchorProps) {
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        "h-fit w-fit",
        pathname === href ? "text-red border-red border-b font-bold" : "",
        className,
      )}
      href={href}
    >
      {title}
    </Link>
  );
}
