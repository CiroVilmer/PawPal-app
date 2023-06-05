import { date, z } from "zod";
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


    loginUser: protectedProcedure
    .input(z.object({
        email: z.string(),
        password: z.string(),
    }))
    .mutation(async ({ input, ctx}) =>{
        const email = input.email;

        let user = await ctx.prisma.user.findUnique({
            where:{
                email: email,
            }
        })

        let password = input.password;
        if(user && user.password === password){

        }


        if(!user){
            return
        }

    }),

});
