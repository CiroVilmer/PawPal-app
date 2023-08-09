import React from 'react';
import toast, { Toast, Toaster } from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { api } from '~/utils/api';

const postForm: React.FC = () : JSX.Element =>{

    const {mutate: createNewPost} = api.post.createPost.useMutation();

    const initialValues = {
        title: '',
        location: '',
      }
    
      const onSubmit = (values: {title: string, location: string}) => {
        console.log('Form values:', values);

        createNewPost(values, {
            onSuccess: () =>{
                toast.success("Post Created")
            },
            onError: (error:any) => {
                toast.error("Error creating post")
            }
        })

      };
    
    return (

        <div>
        <h1>My Form</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <div>
              <label htmlFor="title">Title</label>
              <Field type="text" id="title" name="title" />
            </div>
  
            <div>
              <label htmlFor="location">Location</label>
              <Field type="text" id="location" name="location" />
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

export default postForm;