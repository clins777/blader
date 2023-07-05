import { createTRPCRouter } from "~/server/api/trpc";
import { spotsRouter } from "./routers/spots";

export const appRouter = createTRPCRouter({
  spots: spotsRouter,
});

export type AppRouter = typeof appRouter;
