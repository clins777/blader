import { type Spot } from "@prisma/client";

type SpotCardProps = { spot: Spot };

export function SpotCard({ spot }: SpotCardProps) {
  const { spotName, imageUrl, googleMapsUrl } = spot;

  return (
    <div className="w-full border-b border-slate-400 md:w-1/3">
      <a
        href={googleMapsUrl}
        className="flex justify-center border-b border-slate-400 py-5"
      >
        {spotName}
      </a>
      <img src={imageUrl} className="flex p-5" />
    </div>
  );
}
