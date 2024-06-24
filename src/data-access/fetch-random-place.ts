"use server";

import { RANDOM_PLACE_TAG } from "@/consts/cache-tags";
import { COGENT_LABS_LL } from "@/consts/map";

const NO_STORE = "no-store";

export type Place4S = {
  fsq_id: string;
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

  return selected;
}

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

// @TODO: Save tokens by fetching only for one
export const fetchRandomPlaceDetailed = async () => {
  const fields = ["fsq_id", "description", "photos", "geocodes", "name"];

  const queryParams = new URLSearchParams({
    ll: COGENT_LABS_LL,
    radius: "1000",
    fields: fields.join(","),
  }).toString();

  const result: Array<Place4SDetailed> = await fetch(
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
};
