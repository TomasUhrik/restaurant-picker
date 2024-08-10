import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dice6Icon } from "lucide-react";
import Link from "next/link";

export const LinkRandomVenue = () => {
  return (
    <Link
      className={buttonVariants({ variant: "default", size: "sm" })}
      href="/"
    >
      <span className={cn("mr-1")}>
        <Dice6Icon size={18} />
      </span>
      Randomize
    </Link>
  );
};
