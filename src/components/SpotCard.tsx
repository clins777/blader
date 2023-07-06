import type { Spot } from "@prisma/client";

type SpotCardProps = { spot: Spot };

const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export function SpotCard({ spot }: SpotCardProps) {
  const { spotName, imageUrl, googleMapsUrl } = spot;

  return (
    <div className="card" onClick={() => openInNewTab(googleMapsUrl)}>
      <div className="flex p-6">
        <img src={imageUrl} alt={spotName} className="card-img" />
      </div>
      <h5 className="pb-6 text-xl">{spotName}</h5>
    </div>
  );
}
