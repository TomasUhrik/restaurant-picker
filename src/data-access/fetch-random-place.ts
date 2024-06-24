"use server";

import { RANDOM_PLACE_TAG } from "@/consts/cache-tags";
import { COGENT_LABS_LL } from "@/consts/map";

const NO_STORE = "no-store";

export type Place4S = {
  name: string;
  geocodes: {
    main: {
      latitude: number;
      longitude: number;
    };
  };
};

export async function fetchRandomPlace() {
  const queryParams = new URLSearchParams({
    ll: COGENT_LABS_LL,
    radius: "1000",
  }).toString();

  const result: Array<Place4S> = await fetch(
    "https://api.foursquare.com/v3/places/search?" + queryParams,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.FOUR_SQUARE_API_KEY || "",
      },
      cache: NO_STORE,
      next: {
        tags: [RANDOM_PLACE_TAG],
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((err) => {
      console.log("error happende in fetchRandomPlace:");
      console.error(err);
      throw err;
    });

  const randomIndex = Math.floor(Math.random() * result.length);
  const selected = result && result[randomIndex];

  console.log("Selected:", selected);

  return selected;
}
