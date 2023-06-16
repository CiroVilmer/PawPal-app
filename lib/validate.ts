export default function login_validate(values){
    const errors = {};

    if(!values.email){
        errors.email = "Email requerido";
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email requerido";
    }


    if(!values.password){
        errors.password = "Contraseña requerida";
    }else if(values.password.length < 8){
        errors.password = "La contraseña debe tener mínimo 8 caracteres";
    }
    return errors;
}

export function register_validate(values){
    const errors = {};

    if(!values.email){
        errors.email = "Email requerido";
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email no valido";
    }

    if(!values.password){
        errors.password = "Contraseña requerida";
    }else if(values.password.length < 8){
        errors.password = "La contraseña debe tener mínimo 8 caracteres";
    }else if(values.password.length > 20){
        errors.password = "La contraseña debe tener máximo 20 caracteres";
    }else if(values.password.includes(" ")){
        errors.password = "La contraseña no puede tener espacios";
    }

    if(!values.confirmPassword){
        errors.confirmPassword = "Confirmar contraseña";
    }else if(values.confirmPassword !== values.password){
        errors.confirmPassword = "Las contraseñas no coinciden";
    }




    // if(!values.confirm_password){
    //     errors.confirm_password = "Confirm Password is required";
    // }else if(values.confirm_password !== values.password){
    //     errors.confirm_password = "Confirm Password is not match";
    // }

    if(!values.name){
        errors.name = "Nombre requerido";
    }

    if(!values.surName){
        errors.surName = "Apellido requerido";
    }




    return errors;
}

