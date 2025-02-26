export default function ValidateLogin(value){
   let errors = {};
   if(!value.email){
    errors.email = "Email is required";

   }else if(!/\S+@\S+\.\S+/.test(value.email)){
    errors.email = "Email is invalid";
   }
   if(!value.password){
    errors.password = "Password is required";
   }
   return errors;
}

