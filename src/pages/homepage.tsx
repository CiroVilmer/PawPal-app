import { getSession } from "next-auth/react";
import { signOut, useSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import React from "react";





export function HomePage(): JSX.Element {

    const {data: session, status} = useSession();

    if (status === "authenticated") {
        return (
            <div className="flex h-screen justify-center items-center font-Poppins">
                <div className="bg-slate-200 border rounded-md p-10">
                    <div className="flex flex-col gap-7" >
                        <div className="flex justify-center">
                        <h1 className="text-3xl font-bold">Bienvenido a PawPal!</h1>
                        </div>
                        <div className="flex justify-center">
                        <h2 className="text-xl">Ingresaste como {session.user.name} </h2>
                        </div>
                        <h2 className="text-xl">Email: {session.user.email} </h2>
                        
                        <div className="flex justify-center">
                            <button onClick={() => void signOut()} className="bg-pink-300 border rounded-full w-24 p-2 hover:bg-pink-300 hover:ring-2 hover:ring-offset-1 hover:ring-pink-200 hover:scale-105 transition-all duration-200" >Sign Out</button>
                        </div>
                    </div>
                </div>
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
        console.log("Not Signed in")
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