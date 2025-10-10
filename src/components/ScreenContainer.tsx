import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";

interface IScreenContainer extends PropsWithChildren {
  className?: string;
}

export default function ScreenContainer({
  className,
  children,
}: IScreenContainer) {
  return <section className={cn("h-screen", className)}>{children}</section>;
}
