"use client";

import { COGENT_LABS_LATITUDE, COGENT_LABS_LONGITUDE } from "@/consts/map";
import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";

export type VenueCoords = { lat: number; lng: number };

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

export const Map = ({ venueCoords }: { venueCoords?: VenueCoords }) => {
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
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => {
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
