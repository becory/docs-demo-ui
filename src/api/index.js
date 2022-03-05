import axios from 'axios'

// export const baseURL = 'http://localhost:3001'
export const baseURL = 'https://mydocs-demo.herokuapp.com'
const service = axios.create({
    baseURL
    // baseURL: process.env.API
})

service.interceptors.request.use(
    config => {
        const token = localStorage.getItem('docs-demo-token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data
        if (response.status >= 300) {
            return Promise.reject(new Error())
        }
        return res
    },
    async error => {
        return Promise.reject(error)
    }
)

export default service