"use client";

import { VenueCoords } from "@/consts/types";
import { useMapStore } from "@/stores/map-store/map-store";
import { useEffect } from "react";

// @TODO: Rename to populate MapStore
export const MapRenderer = ({ venueCoords }: { venueCoords: VenueCoords }) => {
  const { setVenueCoords } = useMapStore();

  useEffect(() => {
    setVenueCoords(venueCoords);
  }, [venueCoords, setVenueCoords]);

  return <> </>;
};
