import { cn } from "@/lib/utils";
import { LazyMap } from "../../../components/map/map-lazy";

export const BackgroundMapLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <div className={cn("absolute top-0 left-0 w-full h-full z-0")}>
        <LazyMap />
      </div>

      <div className={cn("relative w-full h-full pointer-events-none z-10")}>
        {children}
      </div>
    </div>
  );
};
