import { cn } from "@/utils/cn";
import Input from "./Input";

export default function Checkbox({
  title,
  id,
  className,
}: {
  title: string;
  id: string;
  className?: string;
}) {
  return (
    <div className="w-full py-3 px-5 bg-white/80 text-black rounded-[8px] flex items-center select-none gap-2">
      <Input
        id={id}
        type="checkbox"
        className={cn("w-5 h-5 border", className)}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
}
