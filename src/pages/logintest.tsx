import React   from 'react';
import { signIn } from "next-auth/react";
import Link from 'next/link';
import { Field, Form, Formik, useFormik } from 'formik';
import login_validate from 'lib/validate';
import router, { useRouter } from 'next/router';
import {FiEyeOff, FiEye} from 'react-icons/fi';
import toast, { Toaster, Toast } from 'react-hot-toast';


export function LogInFormTest(): JSX.Element {
  
    const initialValues = {
        email: '',
        password: '',
    }


    const onSubmit = (values: {email: string, password: string}) => {
        console.log('Form values:', values);
      
        
    }
    
  return ( 

    <div>
    <h1>My Form</h1>
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div>
          <label htmlFor="email">email</label>
          <Field type="text" id="email" name="email" />
        </div>

        <div>
          <label htmlFor="password">password</label>
          <Field type="text" id="password" name="password" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>

    <Toaster
    position="top-center"
    reverseOrder={false}
  />

  </div>

    );

}

export default LogInFormTest;