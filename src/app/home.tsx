"use client";

import Link from "next/link";
import { revalidateRandomPlace } from "./actions/revalidate-random-place";
import { Map } from "./components/map/map";

export function Home({ initialData }: { initialData: any }) {
  return (
    <div>
      <h1>Place</h1>
      <p>{initialData?.name}</p>
      <Link href="/about">About</Link>
      <button onClick={() => revalidateRandomPlace()}>Retry</button>
      <Map />
    </div>
  );
}
