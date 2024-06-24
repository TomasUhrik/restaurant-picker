"use client";

import Link from "next/link";
import { revalidateRandomPlace } from "./actions/revalidate-random-place";
import { BackgroundMapLayout } from "./components/background-map-layout/background-map-layout";
import { Place4SDetailed } from "@/data-access/fetch-random-place";

export function Home({ initialData }: { initialData: Place4SDetailed }) {
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
          minWidth: "100px",
          minHeight: "100px",
          padding: "20px",
          margin: "20px",
        }}
      >
        <h1>Place</h1>
        <p>{initialData?.name}</p>
        <Link href="/about">About</Link>
        <button onClick={() => revalidateRandomPlace()}>Retry</button>
        {initialData.photos.map((photo) => {
          return (
            <img
              key={photo.id}
              src={`${photo.prefix}original${photo.suffix}`}
              alt={initialData.name}
              width={photo.width * 0.1}
              height={photo.height * 0.1}
            />
          );
        })}
      </div>
    </BackgroundMapLayout>
  );
}
