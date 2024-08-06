import { PopulateMapStore } from "@/app/components/populate-map-store/populate-map-store";
import { SidebarContent } from "@/app/components/sidebar-content/sidebar-content";
import { fetchPlace } from "@/data-access/fetch-place";
import { cn } from "@/lib/utils";
import Link from "next/link";

const MOCK_ID = "4b0587b2f964a5203fa022e3";

export default async function Place({
  params,
}: {
  params: { [label: string]: string };
}) {
  const place = await fetchPlace(params.placeId);

  return (
    <div
      className={cn(
        "h-screen w-screen relative pointer-events-none",
        "md:max-w-lg md:bg-gray-100 md:rounded-lg md:pointer-events-auto"
      )}
    >
      {/* @TODO: Rename */}
      <div className={cn("bg-red-500 pointer-events-auto")}>
        <SidebarContent />
      </div>
      <div
        className={cn(
          "bg-blue-700 absolute bottom-0 pointer-events-auto",
          "md:bottom-auto"
        )}
      >
        <h1>{place.name}</h1>
        {/* <button onClick={() => revalidateRandomPlace()}>Retry</button> */}
        <div style={{ display: "flex", overflow: "auto" }}>
          {place.photos.map((photo) => {
            return (
              <img
                key={photo.id}
                src={`${photo.prefix}original${photo.suffix}`}
                alt={place.name}
                width={photo.width * 0.1}
                height={photo.height * 0.1}
              />
            );
          })}
        </div>

        <div style={{ padding: "10px 0" }}>
          <p>{place.description}</p>
        </div>
      </div>
      <PopulateMapStore
        venueCoords={{
          lat: place.geocodes.main.latitude,
          lng: place.geocodes.main.longitude,
        }}
      />
    </div>
  );
}
