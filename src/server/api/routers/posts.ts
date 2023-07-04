import { z } from "zod";
import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from "~/server/api/trpc";

import { prisma } from "~/server/db";

export const postRouter = createTRPCRouter({
    createPost: protectedProcedure.input(
        z.object({
            title: z.string(),
            location: z.string(),
        })
    )
    .mutation(async ({ input, ctx }) => {

        const post = await ctx.prisma.post.create({
            data: {
                title: input.title,
                location: input.location,
                author:{ connect: { id: ctx.session.user.id } },
            }
        });
        return post

    }),

});
