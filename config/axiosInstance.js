import axios from "axios";

const axiosInstance=axios.create({
    baseURL:process.env.FIREBASE_API,
    timeout:6000
})

export default axiosInstance