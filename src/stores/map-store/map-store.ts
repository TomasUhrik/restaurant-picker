import { VenueCoords } from "@/consts/types";
import { create } from "zustand";

interface MapState {
  venueCoords: VenueCoords | undefined;
  setVenueCoords: (venueCoords: VenueCoords) => void;
}

export const useMapStore = create<MapState>()((set) => ({
  venueCoords: undefined,
  setVenueCoords: (venueCoords) => set(() => ({ venueCoords })),
}));
