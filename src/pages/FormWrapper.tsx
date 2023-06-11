import { ReactNode } from "react"

type FormWrapperProps = {
    title: string
    children: ReactNode
}

export function FormWrapper({children} : FormWrapperProps){
    return (
        <div className="flex h-screen items-center max-w-screen-lg p-3 container justify-center lg:ml-28 lg:justify-start">
          <div className="border-solid border border-gray rounded-md shadow-md p-8">{children}</div>
        </div>
    );
}