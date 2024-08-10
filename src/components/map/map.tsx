"use client";

import { COGENT_LABS_LATITUDE, COGENT_LABS_LONGITUDE } from "@/consts/map";
import { MAP_STYLES } from "@/consts/map-styles";
import { VenueCoords } from "@/consts/types";
import { MD_BREAKPOINT, MIN_INFO_HEIGHT } from "@/consts/ui";
import { useMapStore } from "@/stores/map-store/map-store";
import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";

const BUMPER_FOR_ROUNDED_CORNERS = "20px";

const renderPathToVenue = (
  directionsRenderer: any,
  directionsService: any,
  maps: any,
  venueCoords?: VenueCoords
) => {
  if (!venueCoords) {
    directionsRenderer.setDirections();
    return;
  }

  directionsService.route(
    {
      origin: new maps.LatLng(COGENT_LABS_LATITUDE, COGENT_LABS_LONGITUDE),
      destination: new maps.LatLng(venueCoords.lat, venueCoords.lng),
      travelMode: maps.TravelMode.WALKING,
    },
    (result: any) => {
      directionsRenderer.setDirections(result);
    }
  );
};

export const Map = () => {
  const { venueCoords } = useMapStore();

  const [mapControllers, setMapControllers] = useState({
    directionsRenderer: undefined,
    directionsService: undefined,
    maps: undefined,
  });

  const defaultProps = {
    center: {
      lat: COGENT_LABS_LATITUDE,
      lng: COGENT_LABS_LONGITUDE,
    },
    zoom: 17,
  };

  useEffect(() => {
    if (
      !mapControllers.directionsService ||
      !mapControllers.directionsRenderer ||
      !mapControllers.maps
    ) {
      return;
    }

    renderPathToVenue(
      mapControllers.directionsRenderer,
      mapControllers.directionsService,
      mapControllers.maps,
      venueCoords
    );
  }, [venueCoords, mapControllers]);

  return (
    <div
      className={`w-screen h-screen !md:h-screen`}
      // Tailwind needs to know values before runtime -> use inline styles with variables
      style={{
        height:
          window && window.innerWidth < MD_BREAKPOINT
            ? `calc(100vh - ${MIN_INFO_HEIGHT} + ${BUMPER_FOR_ROUNDED_CORNERS})`
            : "100vh",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{ disableDefaultUI: true }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => {
          map.setOptions({ styles: MAP_STYLES });

          const newDirectionsService = new maps.DirectionsService();
          const newDirectionsRenderer = new maps.DirectionsRenderer();
          newDirectionsRenderer.setMap(map);

          setMapControllers({
            directionsRenderer: newDirectionsRenderer,
            directionsService: newDirectionsService,
            maps,
          });
        }}
      />
    </div>
  );
};
