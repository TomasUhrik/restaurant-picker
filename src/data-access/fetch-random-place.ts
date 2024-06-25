"use server";

import { RANDOM_PLACE_TAG } from "@/consts/cache-tags";
import { COGENT_LABS_LL } from "@/consts/map";

const NO_STORE = "no-store";

type Photo4S = {
  id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
};

export type Place4SDetailed = {
  fsq_id: string;
  name: string;
  geocodes: {
    main: {
      latitude: number;
      longitude: number;
    };
  };
  photos: Array<Photo4S>;
};

export const fetchRandomPlaceId = async (): Promise<string> => {
  const fields = ["fsq_id"];

  const queryParams = new URLSearchParams({
    ll: COGENT_LABS_LL,
    radius: "1000",
    fields: fields.join(","),
  }).toString();

  try {
    const result: Array<{ fsq_id: string }> = await fetch(
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
        console.error(err);
        throw err;
      });

    const randomIndex = Math.floor(Math.random() * result.length);
    const selected = result && result[randomIndex];

    return selected.fsq_id;
  } catch (error) {
    throw error;
  }
};
