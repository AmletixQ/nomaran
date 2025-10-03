import { cn } from "@/utils/cn";
// import Input from "./Input";
import { InputHTMLAttributes } from "react";

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

export default function Checkbox({
  id,
  className,
  title,
  ...props
}: ICheckbox) {
  return (
    <div className="flex w-full items-center gap-2 rounded-[8px] bg-white/80 px-5 py-3 text-black select-none">
      <input
        id={id}
        {...props}
        type="checkbox"
        className={cn("h-5 w-5 border", className)}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
}
