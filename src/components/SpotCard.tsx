import type { Spot } from "@prisma/client";

type SpotCardProps = { spot: Spot };

const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export function SpotCard({ spot }: SpotCardProps) {
  const { spotName, imageUrl, googleMapsUrl } = spot;

  return (
    <div className="card" onClick={() => openInNewTab(googleMapsUrl)}>
      <div className="flex p-8">
        <img
          src={imageUrl}
          alt={spotName}
          className="aspect-square rounded-md shadow-lg"
        />
      </div>
      <h5 className="pb-8 text-xl">{spotName}</h5>
    </div>
  );
}
