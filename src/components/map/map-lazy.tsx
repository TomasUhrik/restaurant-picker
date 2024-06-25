"use client";

import { Suspense } from "react";

import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("./map").then((mod) => mod.Map), {
  loading: () => <h1>HAHA Loading...</h1>,
  ssr: false,
});

export const LazyMap = (props: any) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicComponent {...props} />
    </Suspense>
  );
};
