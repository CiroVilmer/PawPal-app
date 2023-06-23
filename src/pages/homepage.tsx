import { getSession } from "next-auth/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import React from "react";
import { type } from "os";
import { Session } from "next-auth";

type User = {
    username: string;    
}


export function HomePage(): JSX.Element {

    const {data: session, status} = useSession();

    if (status === "authenticated") {
        return (
            <div>
                <h1>Home Page - LoggedIn as {session.user.name}</h1>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    }else{
        return (
            <h1>Not Logged in</h1>
        )
    }


}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
    const session = await getSession({ req });

    if (!session) {
        return {
            redirect: {
                destination: "/logIn",
                permanent: false,
            },
        };
    }

    return {
        props: { session },
    };
}

export default HomePage;