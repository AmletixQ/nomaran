import Link from "next/link";
import Arrow from "../icons/Arrow";

export default function Backlink() {
  return (
    <Link
      href="/search"
      className="flex cursor-pointer items-center gap-2.5 opacity-60"
    >
      <Arrow /> <p>вернуться назад</p>
    </Link>
  );
}
