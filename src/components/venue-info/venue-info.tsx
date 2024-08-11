import { cn } from "@/utils/cn";
import { H2 } from "../ui/h2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { P } from "../ui/p";
import { Place4S } from "@/data-access/fetch-place";

export const VenueInfo = ({ place }: { place: Place4S }) => {
  return (
    <div>
      <div className={cn("pb-2")}>
        <H2>{place.name}</H2>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {place.photos.map((photo) => {
            const isHorizontal = photo.width > photo.height;

            return (
              <CarouselItem
                key={photo.id}
                className={cn("h-lg", isHorizontal ? "basis-2/3" : "basis-1/3")}
              >
                <img
                  src={`${photo.prefix}original${photo.suffix}`}
                  alt={place.name}
                  className={cn("object-cover rounded-lg w-full h-full")}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {place.description && (
        <div className={cn("mt-2")}>
          <P>{place.description}</P>
        </div>
      )}
    </div>
  );
};
