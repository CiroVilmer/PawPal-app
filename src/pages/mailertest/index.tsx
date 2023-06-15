import { NextPage } from "next";
import React, {useRef} from 'react';
import { transporter } from "../../server/api/mailer";
import { api } from "~/utils/api";
import { z } from "zod";
import { useFormik } from "formik";
    
const emailGet = {
    email: "",
};


async function sendEmail(){
    // const user = api.user.getUserByEmail.useQuery(emailGet);
    const user = "cirov2005@gmail.com";

    console.log(user);

    await transporter.sendMail({
        from: 'pawpal.contacto@gmail.com', // sender address
        to: user, // list of receivers
        subject: "Password change", // Subject line
        text: "CODE", // plain text body
        html: "<b>Hello world?</b>", // html body
    }, function(err: any, info: any){
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
    });
}
interface Props {}
const mailerTest: NextPage = (Props): JSX.Element =>  {

    return (
        <div className="sign in form">
                <form  onSubmit={sendEmail}>
                    <input 
                    type="text" 
                    placeholder="Username"
                    
                    />
                    <button type="submit">Sign In</button>
                </form>
    
            </div>
        );
}

export default mailerTest;




