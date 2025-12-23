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
        "flex w-full items-center gap-2 rounded-lg bg-white/80 px-2.5 py-2 text-black select-none",
        "md:px-3 md:py-2 lg:px-5 lg:py-3",
        className,
      )}
    >
      <input
        id={id}
        {...props}
        type="checkbox"
        className="min-h-3 min-w-3 border xl:min-h-5 xl:min-w-5"
      />
      <label htmlFor={id} className="text-[14px] lg:text-[18px]">
        {children}
      </label>
    </div>
  );
}
