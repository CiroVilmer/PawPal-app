import { NextPage } from "next";
import React, {useState} from 'react';
import { transporter } from "../../server/api/mailer";
import { api } from "~/utils/api";
import { z } from "zod";

    
const emailGet = {
    email: "",
};

async function sendEmail(){
    const user = api.user.getUserByEmail.useQuery(emailGet);

    if (user){
        console.log(user);

        await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: user.data?.email, // list of receivers
            subject: "Password change", // Subject line
            text: "CODE", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

    }
}
interface Props {}
const mailerTest: NextPage = (Props): JSX.Element =>  {

    return (
        <div className="sign in form">
                <form  >
                    <input 
                    type="text" 
                    placeholder="Username"
                    />
                    <input 
                    type="password" 
                    placeholder="Password" 
                    />
                    <button type="submit">Sign In</button>
                </form>
    
            </div>
        );
}

export default mailerTest;




