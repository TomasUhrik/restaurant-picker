"use client";

import Link from "next/link";
import { revalidateRandomPlace } from "./actions/revalidate-random-place";
import { BackgroundMapLayout } from "./components/background-map-layout/background-map-layout";
import { Place4S } from "@/data-access/fetch-random-place";

export function Home({ initialData }: { initialData: Place4S }) {
  return (
    <BackgroundMapLayout
      venueCoords={{
        lat: initialData.geocodes.main.latitude,
        lng: initialData.geocodes.main.longitude,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "100px",
          height: "100px",
          margin: "20px",
        }}
      >
        <h1>Place</h1>
        <p>{initialData?.name}</p>
        <Link href="/about">About</Link>
        <button onClick={() => revalidateRandomPlace()}>Retry</button>
      </div>
    </BackgroundMapLayout>
  );
}
