"use client";

import { COGENT_LABS_LATITUDE, COGENT_LABS_LONGITUDE } from "@/consts/map";
import GoogleMapReact from "google-map-react";

export type VenueCoords = { lat: number; lng: number };

export const Map = ({ venueCoords }: { venueCoords?: VenueCoords }) => {
  const defaultProps = {
    center: {
      lat: COGENT_LABS_LATITUDE,
      lng: COGENT_LABS_LONGITUDE,
    },
    zoom: 17,
  };

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
          const directionsService = new maps.DirectionsService();

          directionsService.route(
            {
              origin: new maps.LatLng(
                COGENT_LABS_LATITUDE,
                COGENT_LABS_LONGITUDE
              ),
              destination: new maps.LatLng(venueCoords?.lat, venueCoords?.lng),
              travelMode: maps.TravelMode.WALKING,
            },
            (result: any) => {
              // @TODO: Do this better
              new maps.DirectionsRenderer({
                map,
                directions: result,
              });
            }
          );
        }}
      />
    </div>
  );
};
