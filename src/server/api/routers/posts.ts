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
            breed: z.string(),
            age: z.string(),
            description: z.string(),
            contact: z.string(),
            image: z.string(),
        })
    )
    .mutation(async ({ input, ctx }) => {

        const post = await ctx.prisma.post.create({
            data: {
                title: input.title,
                location: input.location,
                breed: input.breed,
                age: input.age,
                description: input.description,
                contact: input.contact,
                image: input.image,
                author:{ connect: { id: ctx.session.user.id } },
            }
        });
        if (!post) {
            throw new Error("Post not created");
        }
        return post;

    }),

});
