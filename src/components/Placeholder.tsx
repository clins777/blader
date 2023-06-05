import { Typography } from "@material-tailwind/react";

type PlaceholderProps = { message: string };

export function Placeholder({ message }: PlaceholderProps) {
  return (
    <div className="flex justify-center py-5">
      <Typography variant="h5" align="center" className="font-sans font-medium">
        {message}
      </Typography>
    </div>
  );
}
