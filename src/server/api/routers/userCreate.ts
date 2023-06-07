import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

import { prisma } from "~/server/db";
//min 36:25
export const userRouter = createTRPCRouter({
    createUser: publicProcedure.input(
        z.object({
            name: z.string(),
            dni: z.string(),
            email: z.string(),
            // emailUpdates: z.boolean(),
            password: z.string(),
        })
    )
    .mutation(({ input, ctx }) => {
        const user = prisma.user.create({
        data:{
            name: input.name,
            dni: input.dni, 
            email: input.email,
            // userPreference:{
            //     create:{
            //         emailUpdates: input.emailUpdates
            //     },
            // },
            password: input.password,
        }    
        });
        return user
    }),


    loginUser: protectedProcedure
    .input(z.object({
        email: z.string(),
        password: z.string(),
    }))
    .mutation(({ input, ctx }) => {
        const user = prisma.user.findUnique({
            where:{
                email: input.email,
            },
        });
        return user
    }
    ),
    
    getUser: protectedProcedure
    .input(z.object({
        id: z.number(),
    }))
    .query(({ input, ctx }) => {
        const user = prisma.user.findUnique({
            where:{
                id: input.id,
            },
        });
        return user
    }

    ),
    

});
