export default function login_validate(values){
    const errors = {};

    if(!values.email){
        errors.email = "Email is required";
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email is invalid";
    }

    if(!values.password){
        errors.password = "Password is required";
    }else if(values.password.length < 8){
        errors.password = "Password must be more than 8 characters";
    }
    return errors;
}

export function register_validate(values){
    const errors = {};

    if(!values.email){
        errors.email = "Email is required";
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email is invalid";
    }

    if(!values.password){
        errors.password = "Password is required";
    }else if(values.password.length < 8){
        errors.password = "Password must be more than 8 characters";
    }

    if(!values.confirm_password){
        errors.confirm_password = "Confirm Password is required";
    }else if(values.confirm_password !== values.password){
        errors.confirm_password = "Confirm Password is not match";
    }

    if(!values.firstName){
        errors.firstName = "Name is required";
    }

    if(!values.lastName){
        errors.lastName = "Surname is required";
    }

    if(!values.dni){
        errors.dni = "DNI is required";
    }

    return errors;
}

