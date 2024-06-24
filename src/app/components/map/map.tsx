"use client";

import { COGENT_LABS_LATITUDE, COGENT_LABS_LONGITUDE } from "@/consts/map";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: { text: string }) => <div>{text}</div>;

export const Map = () => {
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
        {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
      </GoogleMapReact>
    </div>
  );
};
