import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Spot } from "@prisma/client";

type SpotCardProps = { spot: Spot };

const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export function SpotCard({ spot }: SpotCardProps) {
  const { spotName, imageUrl, googleMapsUrl } = spot;

  return (
    <Card
      className="w-full max-w-[26rem] bg-deep-purple-50 shadow-lg"
      onClick={() => openInNewTab(googleMapsUrl)}
    >
      <CardHeader floated={false}>
        <img src={imageUrl} alt={spotName} className="aspect-square" />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h5"
          color="deep-purple"
          align="center"
          className="font-sans font-medium"
        >
          {spotName}
        </Typography>
      </CardBody>
    </Card>
  );
}
