"use server";

import { RANDOM_PLACE_TAG } from "@/consts/cache-tags";

const COGENT_LABS_LL = "35.6647034,139.7376358";

export async function fetchRandomPlace() {
  const queryParams = new URLSearchParams({
    ll: COGENT_LABS_LL,
    radius: "1000",
  }).toString();

  // @TODO: Typings
  const result = await fetch(
    "https://api.foursquare.com/v3/places/search?" + queryParams,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.FOUR_SQUARE_API_KEY || "",
      },
      // @TODO: Type casting
      cache: "no-store" as RequestCache,
      next: {
        tags: [RANDOM_PLACE_TAG],
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  const randomIndex = Math.floor(Math.random() * result.results.length);
  const selected = result && result.results[randomIndex];

  return selected;
}
