"use client";

import { Suspense } from "react";

import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("./map").then((mod) => mod.Map), {
  loading: () => (
    <div style={{ width: "100%", height: "100%", backgroundColor: "black" }} />
  ),
  ssr: false,
});

export const LazyMap = (props: any) => {
  return <DynamicComponent {...props} />;
};
