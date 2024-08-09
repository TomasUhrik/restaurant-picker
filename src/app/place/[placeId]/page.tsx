import { PopulateMapStore } from "@/app/components/populate-map-store/populate-map-store";
import { Search } from "@/app/components/search/search";
import { VenueInfo } from "@/app/components/venue-info/venue-info";
import { fetchPlace } from "@/data-access/fetch-place";
import { cn } from "@/lib/utils";

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
        "md:max-w-lg  md:rounded-lg"
      )}
    >
      <div className={cn("pointer-events-auto p-2")}>
        <Search />
      </div>

      <div
        className={cn(
          "bg-white absolute bottom-0 pointer-events-auto py-4 px-2 rounded-t-xl",
          "md:bottom-auto md:mx-2 md:rounded-md"
        )}
      >
        <VenueInfo place={place} />
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
