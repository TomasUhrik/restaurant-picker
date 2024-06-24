"use server";

import { RANDOM_PLACE_TAG } from "@/consts/cache-tags";

const COGENT_LABS_LL = "35.6647034,139.7376358";

const NO_STORE = "no-store";

type Place4S = {
  name: string;
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

  console.log(result);

  const randomIndex = Math.floor(Math.random() * result.length);
  const selected = result && result[randomIndex];

  return selected;
}
