"use client";

import Link from "next/link";
import { revalidateRandomPlace } from "./actions/revalidate-random-place";
import { BackgroundMapLayout } from "./components/background-map-layout/background-map-layout";

export function Home({ initialData }: { initialData: any }) {
  return (
    <div>
      <h1>Place</h1>
      <p>{initialData?.name}</p>
      <Link href="/about">About</Link>
      <button onClick={() => revalidateRandomPlace()}>Retry</button>
      <BackgroundMapLayout>
        <div
          style={{
            backgroundColor: "white",
            width: "100px",
            height: "100px",
            margin: "20px",
          }}
        >
          <h1>Hello world</h1>
        </div>
      </BackgroundMapLayout>
    </div>
  );
}
