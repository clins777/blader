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
    .mutation(({ ctx, input }) => {
      const authorId = ctx.currentUser.id;
      return ctx.prisma.spot.create({
        data: { ...input, authorId },
      });
    }),
});
