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
            dni: z.number(),
            email: z.string(),
            userPreferences: z.object({
                emailUpdates: z.boolean(),
            }),
        })
    )
    .mutation(({ input, ctx }) => {
        const user = prisma.user.create({
        data:{
            name: input.name,
            dni: input.dni, 
            email: input.email,
            userPreferences: {
                create: {
                    data:{
                        emailUpdates: input.userPreferences.emailUpdates,
                    },
                },
            }, 

        }    
        });
        return user
    })

});
