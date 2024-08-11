"use client";

import { VenueCoords } from "@/consts/types";
import { useMapStore } from "@/stores/map-store/map-store";
import { useEffect } from "react";

export const PopulateMapStore = ({
  venueCoords,
}: {
  venueCoords: VenueCoords;
}) => {
  const { setVenueCoords } = useMapStore();

  useEffect(() => {
    setVenueCoords(venueCoords);
  }, [venueCoords, setVenueCoords]);

  return undefined;
};
