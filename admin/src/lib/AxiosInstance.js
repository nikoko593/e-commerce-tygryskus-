import Axios from 'axios'

const AxiosInstance = Axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
})

AxiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.token = token
        }    
        console.log("IT WORKS", token)
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default AxiosInstance