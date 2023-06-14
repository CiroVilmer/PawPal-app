import Email from "next-auth/providers/email";
import bcrypt from "bcrypt";

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
            surName: z.string(),
            dni: z.number(),
            email: z.string(),
            // emailUpdates: z.boolean(),
            password: z.string(),
        })
    )
    .mutation(async ({ input, ctx }) => {

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(input.password, salt);

        const user = prisma.user.create({
        data:{
            name: input.name,
            surName: input.surName,
            dni: input.dni, 
            email: input.email,
            // userPreference:{
            //     create:{
            //         emailUpdates: input.emailUpdates
            //     },
            // },
            password: hashedPassword,
        }    
        });
        return user
    }),


    loginUser: protectedProcedure
    .input(z.object({
        email: z.string(),
        password: z.string(),
    }))
    .query(({ input, ctx }) => {
        const user = prisma.user.findUnique({
            where:{
                email: input.email,
            },
        });
        return user
    }
    ),

    findUser: publicProcedure
    .input(z.object({
        email: z.string(),
    }))
    .mutation(({ input, ctx }) => {
        const user = prisma.user.findUnique({
            where:{
                email: input.email,
            },
        });

        if(user){
            return user
        }else{
            return null
        }
    },
    ),

    getUserByEmail: publicProcedure
    .input(z.object({
        email: z.string(),
    }))
    .query(({ input, ctx }) => {
        const user = prisma.user.findUnique({
            where:{
                email: input.email,
            },
        });
        return user
    }

    ),
    

});
