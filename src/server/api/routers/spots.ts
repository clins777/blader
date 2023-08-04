import { addSpotFormInput } from "~/schema";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const spotsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.spot.findMany();
  }),
  create: privateProcedure
    .input(addSpotFormInput)
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.currentUserId;
      return await ctx.prisma.spot.create({
        data: { ...input, authorId },
      });
    }),
});
