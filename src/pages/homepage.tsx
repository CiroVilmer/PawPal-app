import { getSession } from "next-auth/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";

export function HomePage(): JSX.Element {

    return (
        <label htmlFor="">Logged In</label>
    )

}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
    const session = await getSession({ req });

    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: { session },
    };
}

export default HomePage;