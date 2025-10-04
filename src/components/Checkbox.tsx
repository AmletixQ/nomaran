import { cn } from "@/utils/cn";
import { InputHTMLAttributes } from "react";

type ICheckbox = InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox({
  id,
  className,
  children,
  ...props
}: ICheckbox) {
  return (
    <div
      className={cn(
        "flex w-full items-center gap-2 rounded-[8px] bg-white/80 px-5 py-4 text-black select-none",
        className,
      )}
    >
      <input
        id={id}
        {...props}
        type="checkbox"
        className={cn("min-h-5 min-w-5 border")}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}
