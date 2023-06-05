import { date, z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

import { CredentialsProvider } from "next-auth/providers";

import { prisma } from "~/server/db";
//min 36:25
export const userRouter = createTRPCRouter({
    createUser: publicProcedure.input(
        z.object({
            name: z.string(),
            dni: z.number(),
            email: z.string(),
            emailUpdates: z.boolean(),

        })
    )
    .mutation(({ input, ctx }) => {
        const user = prisma.user.create({
        data:{
            name: input.name,
            dni: input.dni, 
            email: input.email,
            userPreference:{
                create:{
                    emailUpdates: input.emailUpdates
                },
            },
        }    
        });
        return user
    }),

    loginUser: publicProcedure.input(
        z.object({
            email: z.string(),
        })
    )
    .mutation(({ input, ctx }) => {
        const user = prisma.user.findUnique({
            where: {
                email: input.email,
            },
        });
        return user;
    }),

    updateUser: protectedProcedure
    .input(z.object({
        name: z.string(),
        dni: z.number(),
        email: z.string(),
        emailUpdates: z.boolean(),
    }))
    .mutation(({ input, ctx }) => {
        const user = prisma.user.update({
            where: {
                email: input.email,
            },
            data:{
                name: input.name,
                dni: input.dni, 
                email: input.email,
                userPreference:{
                    update:{
                        emailUpdates: input.emailUpdates
                    },
                },
            },
        });
        return user;
    }
    ),

    deleteUser: protectedProcedure
    .input(z.object({
        email: z.string(),
    }))
    .mutation(({ input, ctx }) => {
        const user = prisma.user.delete({
            where: {
                email: input.email,
            },
        });
        return user;
    }
    ),

    getUser: protectedProcedure
    .input(z.object({
        email: z.string(),
    }))
    .mutation(({ input, ctx }) => {
        const user = prisma.user.findUnique({
            where: {
                email: input.email,
            },
        });
        return user;
    }
    ),



});
