"use client";

import { COGENT_LABS_LATITUDE, COGENT_LABS_LONGITUDE } from "@/consts/map";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({
  text,
}: {
  text: string;
  lat: number;
  lng: number;
}) => <h1>{text}</h1>;

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
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {venueCoords && (
          <AnyReactComponent
            lat={venueCoords.lat}
            lng={venueCoords.lng}
            text="Cogent labs office"
          />
        )}
      </GoogleMapReact>
    </div>
  );
};
