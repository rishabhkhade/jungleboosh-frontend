import axios from "axios";




const sellerbaseUrl = process.env.REACT_APP_SELLER_API;
// const sellerbaseUrl = "http://localhost:8080";
// const adminbaseUrl = process.env.REACT_APP_ADMIN_API;
const adminbaseUrl = "http://localhost:4002"


const sellerApi = axios.create({
    baseURL:sellerbaseUrl,
    withCredentials: true,
});
const adminApi = axios.create({
    baseURL:adminbaseUrl,
    // withCredentials: true,
});

let sellerToken = null;

if(localStorage.getItem("seller_data") !== null){
    const localData = JSON.parse(localStorage.getItem("seller_data"));

    const {access_token} = localData.token;

    sellerToken = access_token;
}


const HeaderAuth = axios.create({
    baseURL : sellerbaseUrl,
    headers:{
        Authorization : `Bearer ${sellerToken}`
    }
})


export {sellerApi,HeaderAuth,adminApi}