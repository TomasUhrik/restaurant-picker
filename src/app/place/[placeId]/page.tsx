import { PopulateMapStore } from "@/app/components/populate-map-store/populate-map-store";
import { SidebarContent } from "@/app/components/sidebar-content/sidebar-content";
import { fetchPlace } from "@/data-access/fetch-place";
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
      style={{
        backgroundColor: "white",
        minWidth: "100px",
        minHeight: "100px",
        padding: "20px",
        margin: "20px",
      }}
    >
      <SidebarContent>
        <h1>Place</h1>
        <p>{place.name}</p>
        <Link href="/about">About</Link>
        {/* <button onClick={() => revalidateRandomPlace()}>Retry</button> */}
        {/* {place.photos.map((photo) => {
            return (
              <img
                key={photo.id}
                src={`${photo.prefix}original${photo.suffix}`}
                alt={initialData.name}
                width={photo.width * 0.1}
                height={photo.height * 0.1}
              />
            );
          })} */}
      </SidebarContent>

      <PopulateMapStore
        venueCoords={{
          lat: place.geocodes.main.latitude,
          lng: place.geocodes.main.longitude,
        }}
      />
    </div>
  );
}
