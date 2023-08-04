import { z } from "zod";

const MIN = 1;
const MAX = 128;
const GOOGLE_MAPS_DOMAIN = "https://goo.gl/maps";

export const addSpotFormInput = z.object({
  spotName: z.string().min(MIN).max(MAX),
  googleMapsUrl: z
    .string()
    .url()
    .min(MIN)
    .max(MAX)
    .startsWith(GOOGLE_MAPS_DOMAIN),
  imageUrl: z.string().url().min(MIN).max(MAX),
});

export type AddSpotFormInput = z.infer<typeof addSpotFormInput>;
