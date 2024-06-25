import { VenueCoords } from "../../../components/map/map";
import { LazyMap } from "../../../components/map/map-lazy";

export const BackgroundMapLayout = ({
  children,
  venueCoords,
}: {
  children: React.ReactNode;
  venueCoords?: VenueCoords;
}) => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1,
        }}
      >
        <LazyMap venueCoords={venueCoords} />
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
        }}
      >
        {children}
      </div>
    </div>
  );
};
