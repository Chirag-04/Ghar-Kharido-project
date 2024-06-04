import axios from "axios";
const apiRequest = axios.create({
    baseURL : "https://https-github-com-chirag-04-ghar-khardio.onrender.com/api",
    withCredentials:true,
})

export default apiRequest;