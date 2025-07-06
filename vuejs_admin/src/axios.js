import axios from "axios";
import store from "./store";
import router from "./router";

const axiosCLient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosCLient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${store.replaceState.user.token}`
    return config;
})

axiosCLient.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        sessionStorage.removeItem('TOKEN')
        router.push({ name: 'login'})
    }

    throw error;
    // console.error(error);
})

export default axiosCLient;