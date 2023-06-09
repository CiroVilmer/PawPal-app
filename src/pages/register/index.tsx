import { NextPage } from "next";
import React, {useState} from 'react';
import { api } from "~/utils/api";
import { useFormik } from "formik";
const createUser  = api.user.createUser.useMutation({
    onSuccess: (user) => {
        console.log(user);
    }
});

const[show, setShow] = useState(false)
const formik = useFormik({
  initialValues:{
    email: "",
    password:"",
  },
  onSubmit
  })
async function onSubmit (values: any){
  console.log(values)
}

interface Props {}
   
const SignIn: NextPage = (props): JSX.Element => {
    return (
    <div className="sign in form">
            <form  onSubmit={formik.handleSubmit}>
                <input 
                type="text" 
                placeholder="Username"
                {...formik.getFieldProps} 
                />
                <input 
                type="password" 
                placeholder="Password" 
                {...formik.getFieldProps}
                />
                <button type="submit">Sign In</button>
            </form>

        </div>
    );
};
export default SignIn;

