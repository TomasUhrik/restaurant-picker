"use server";

import { RANDOM_PLACE_TAG } from "@/consts/cache-tags";
import { revalidateTag } from "next/cache";

export async function revalidateRandomPlace() {
  revalidateTag(RANDOM_PLACE_TAG);
}
