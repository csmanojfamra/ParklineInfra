"use client";
import dynamic from "next/dynamic";
import MapSkeleton from "./MapSkeleton";

// Lazy-load the heavy d3-geo map only on the client, skeleton fills the space
const IndiaPresenceMap = dynamic(() => import("./IndiaPresenceMap"), {
  ssr: false,
  loading: () => <MapSkeleton />,
});

export default function HeroMap() {
  return <IndiaPresenceMap />;
}
