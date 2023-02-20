import { createTRPCRouter, publicProcedure } from "../trpc";

export const chitDataRouter = createTRPCRouter({
  test: publicProcedure.query(() => {
    return "works";
  }),
});
