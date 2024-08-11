import { PopulateMapStore } from "@/components/populate-map-store/populate-map-store";
import { Search } from "@/components/search/search";
import { VenueInfo } from "@/components/venue-info/venue-info";
import { fetchPlace } from "@/data-access/fetch-place";
import { LinkRandomVenue } from "@/components/link-random-venue/link-random-venue";
import { MIN_INFO_HEIGHT } from "@/consts/ui";
import { redirect } from "next/navigation";
import { cn } from "@/utils/cn";

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
        "h-svh w-svw relative pointer-events-none",
        "md:max-w-lg md:rounded-lg"
      )}
    >
      <div className={cn("pointer-events-auto p-2")}>
        <Search />
      </div>

      <div
        className={cn(
          "justify-end flex px-2 pb-2 w-screen",
          "md:justify-center md:absolute md:top-0 md:left-0 md:px-4 md:py-4"
        )}
      >
        <div className={cn("min-w-0 pointer-events-auto")}>
          <LinkRandomVenue />
        </div>
      </div>

      <div
        style={{ minHeight: MIN_INFO_HEIGHT }}
        className={cn(
          "bg-white absolute bottom-0 pointer-events-auto py-4 px-2 rounded-t-xl shadow-lg w-full",
          "md:bottom-auto md:mx-2 md:rounded-md md:w-[496px]"
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
