import { cn } from "@/utils/cn";

export function Muted({ children }: { children: React.ReactNode }) {
  return <p className={cn("text-sm text-gray-400")}>{children}</p>;
}
