"use client";
import dynamic from "next/dynamic";
import MapSkeleton from "./MapSkeleton";

const DesktopMap = dynamic(() => import("./IndiaPresenceMap"), {
  ssr: false,
  loading: () => <MapSkeleton />,
});

const MobileMap = dynamic(() => import("./IndiaPresenceMap"), {
  ssr: false,
  loading: () => <MapSkeleton mobileBackdrop />,
});

interface Props {
  mobileBackdrop?: boolean;
  lightBg?: boolean;
}

export default function HeroMap({ mobileBackdrop = false, lightBg = false }: Props) {
  return mobileBackdrop
    ? <MobileMap mobileBackdrop lightBg={lightBg} />
    : <DesktopMap lightBg={lightBg} />;
}
