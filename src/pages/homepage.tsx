import { getSession } from "next-auth/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";

export function HomePage(): JSX.Element {

    return (
        <div>
            <h1>Home Page - LoggedIn</h1>
            <button onClick={() => signOut()}>Sign Out</button>
        </div>

    )

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