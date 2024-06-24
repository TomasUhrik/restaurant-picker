import { Map } from "../map/map";

export const BackgroundMapLayout = ({
  children,
}: {
  children: React.ReactNode;
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
        <Map />
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 2,
        }}
      >
        {children}
      </div>
    </div>
  );
};
