"use client";

import { Button } from "@/components/ui/button";
import { fetchRandomPlaceId } from "@/data-access/fetch-random-place";
import { cn } from "@/utils/cn";
import { Dice6Icon } from "lucide-react";
import { useRouter } from "next/navigation";

export const LinkRandomVenue = () => {
  const router = useRouter();

  const handleOnClick = async () => {
    const { status, data: randomPlaceId } = await fetchRandomPlaceId();

    if (status === "error" || !randomPlaceId) {
      router.push("/error");
      return;
    }

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
