"use client";

import { Button } from "@/components/ui/button";
import { fetchRandomPlaceId } from "@/data-access/fetch-random-place";
import { cn } from "@/lib/utils";
import { Dice6Icon } from "lucide-react";
import { useRouter } from "next/navigation";

export const LinkRandomVenue = () => {
  const router = useRouter();

  const handleOnClick = async () => {
    const randomPlaceId = await fetchRandomPlaceId();

    router.push(`/place/${randomPlaceId}`);
  };

  return (
    <Button size={"sm"} variant={"default"} onClick={handleOnClick}>
      <span className={cn("mr-1")}>
        <Dice6Icon size={18} />
      </span>
      Randomize
    </Button>
  );
};
