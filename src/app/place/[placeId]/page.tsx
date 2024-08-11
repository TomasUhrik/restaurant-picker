import { PopulateMapStore } from "@/app/components/populate-map-store/populate-map-store";
import { Search } from "@/app/components/search/search";
import { VenueInfo } from "@/app/components/venue-info/venue-info";
import { fetchPlace } from "@/data-access/fetch-place";
import { cn } from "@/lib/utils";
import { LinkRandomVenue } from "@/app/components/link-random-venue/link-random-venue";
import { MIN_INFO_HEIGHT } from "@/consts/ui";
import { redirect } from "next/navigation";

export default async function Place({
  params,
}: {
  params: { [label: string]: string };
}) {
  const { data, status } = await fetchPlace(params.placeId);

  if (status === "error" || !data) {
    return redirect("/error");
  }

  return (
    <div
      className={cn(
        "h-screen w-screen relative pointer-events-none",
        "md:max-w-lg md:rounded-lg"
      )}
    >
      <div className={cn("pointer-events-auto p-2")}>
        <Search />
      </div>

      <div
        className={cn(
          "justify-end flex px-2 pb-2",
          "md:justify-center md:absolute md:top-0 md:left-0 md:px-4 md:py-4 w-screen"
        )}
      >
        <div className={cn("min-w-0 pointer-events-auto")}>
          <LinkRandomVenue />
        </div>
      </div>

      <div
        style={{ minHeight: MIN_INFO_HEIGHT }}
        className={cn(
          "bg-white absolute bottom-0 pointer-events-auto py-4 px-2 rounded-t-xl",
          "md:bottom-auto md:mx-2 md:rounded-md"
        )}
      >
        <VenueInfo place={data} />
      </div>

      <PopulateMapStore
        venueCoords={{
          lat: data.geocodes.main.latitude,
          lng: data.geocodes.main.longitude,
        }}
      />
    </div>
  );
}
