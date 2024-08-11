"use server";

import { ServerActionResponse } from "@/types/common";

type Photo4S = {
  id: string;
  created_at: string;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
};

export type Place4S = {
  fsq_id: string;
  name: string;
  geocodes: {
    main: {
      latitude: number;
      longitude: number;
    };
  };
  photos: Array<Photo4S>;
  description: string;
  features?: {
    food_and_drink?: Array<string>;
  };
  menu?: string;
};

export async function fetchPlace(
  fsqId: string
): Promise<ServerActionResponse<Place4S>> {
  const fields = [
    "fsq_id",
    "description",
    "photos",
    "geocodes",
    "name",
    "features",
    "menu",
  ];

  const queryParams = new URLSearchParams({
    fields: fields.join(","),
  }).toString();

  const result: ServerActionResponse<Place4S> = await fetch(
    `https://api.foursquare.com/v3/places/${fsqId}?` + queryParams,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.FOUR_SQUARE_API_KEY || "",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => ({
      data,
      status: "success" as const,
    }))
    .catch((error) => ({
      status: "error" as const,
      errorMessage: error.message,
    }));

  return result;
}
