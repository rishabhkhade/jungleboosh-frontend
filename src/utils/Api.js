import axios from "axios";
import Cookies from "js-cookie"; 



const sellerbaseUrl = process.env.REACT_APP_SELLER_API;
// const sellerbaseUrl = "http://localhost:8080";
// const adminbaseUrl = process.env.REACT_APP_ADMIN_API;
const adminbaseUrl = "http://localhost:4002"
const addproduct = "http://localhost:4000/"

 
const sellerApi = axios.create({
    baseURL:sellerbaseUrl,
    withCredentials: true,
});
const adminApi = axios.create({
    baseURL:adminbaseUrl,
    withCredentials: true,
});

const productApi = axios.create({
    baseURL:addproduct,
    withCredentials: true,
});



let sellerToken;



if(localStorage.getItem("seller_Data") !== null){
    const localData = JSON.parse(localStorage.getItem("seller_Data"))

    const access_token = localData.token;

   

   

    sellerToken = access_token;
}


const HeaderAuth = axios.create({
    baseURL : sellerbaseUrl,
    withCredentials: true,

    headers:{
        Authorization : `Bearer ${sellerToken}`
    }
})


export {sellerApi,HeaderAuth,adminApi,productApi}