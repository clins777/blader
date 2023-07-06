import { type Spot } from "@prisma/client";
import { SpotCard } from "./SpotCard";

type SpotListProps = { spots: Spot[] };

export function SpotList({ spots }: SpotListProps) {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        p-6
        sm:grid-cols-2
        sm:p-10
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6"
    >
      {spots.map((spot, index) => (
        <SpotCard key={index} spot={spot} />
      ))}
    </div>
  );
}
