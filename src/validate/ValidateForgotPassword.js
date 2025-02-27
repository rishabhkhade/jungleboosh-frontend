export default function ValidateFp(value){
    let errors = {};
    if(!value.email){
     errors.email = "Email is required";
 
    }else if(!/\S+@\S+\.\S+/.test(value.email)){
     errors.email = "Email is invalid";
    }
   
    return errors;
 }
 