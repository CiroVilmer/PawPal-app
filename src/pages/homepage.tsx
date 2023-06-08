import { getSession } from "next-auth/react";
import React from "react";

export function HomePage(): JSX.Element {

    return (
        <label htmlFor="">Logged In</label>
    )

}

// export async function getServerSideProps({ req}) {
//     const session = await getSession({ req });

//     if (!session) {
//         return {
//             redirect: {
//                 destination: "/",
//                 permanent: false,
//             },
//         };
//     }

//     return {
//         props: { session },
//     };
// }

export default HomePage;