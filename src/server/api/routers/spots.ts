import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { z } from "zod";

const MIN = 1;
const MAX = 128;

export const spotsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.spot.findMany();
  }),
  create: privateProcedure
    .input(
      z.object({
        spotName: z.string().min(MIN).max(MAX),
        googleMapsUrl: z.string().url().min(MIN).max(MAX),
        imageUrl: z.string().url().min(MIN).max(MAX),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.currentUser.id;
      const spot = await ctx.prisma.spot.create({
        data: {
          ...input,
          authorId,
        },
      });
    }),
});
