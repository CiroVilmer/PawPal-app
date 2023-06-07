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
    }else if(values.password.includes("")){
        errors.password = "Invalid Password";
    }
    return errors;


}