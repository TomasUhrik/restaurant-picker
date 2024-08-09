import { cn } from "@/lib/utils";

export function Muted({ children }: { children: React.ReactNode }) {
  return <p className={cn("text-sm text-gray-400")}>{children}</p>;
}
