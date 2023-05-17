import { type Spot } from "@prisma/client";
import { SpotCard } from "./SpotCard";

type SpotListProps = { spots: Spot[] };

export function SpotList({ spots }: SpotListProps) {
  return (
    <div className="flex flex-wrap">
      {spots.map((spot, index) => (
        <SpotCard spot={spot} index={index} />
      ))}
    </div>
  );
}
