import { type Spot } from "@prisma/client";

type SpotCardProps = { spot: Spot };

const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export function SpotCard({ spot }: SpotCardProps) {
  const { spotName, imageUrl, googleMapsUrl } = spot;

  return (
    <div
      onClick={() => openInNewTab(googleMapsUrl)}
      className="flex flex-col gap-2"
    >
      <img
        src={imageUrl}
        alt={spotName}
        className="aspect-square w-full rounded-[15px] object-cover"
      />
      <div>{spotName}</div>
    </div>
  );
}
