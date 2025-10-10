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
        "flex w-full items-center gap-2 rounded-[8px] bg-white/80 px-2.5 py-2 text-black select-none",
        "md:px-2.5 md:py-1.5",
        "",
        className,
      )}
    >
      <input
        id={id}
        {...props}
        type="checkbox"
        className={cn("min-h-3 min-w-3 border xl:min-h-5 xl:min-w-5")}
      />
      <label htmlFor={id} className="text-[9px]">
        {children}
      </label>
    </div>
  );
}
