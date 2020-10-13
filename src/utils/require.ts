import axios from 'axios'
const require = axios.create()
require.interceptors.request.use(
    (config: any) => {
        return config
    }, (err) => {
        return Promise.reject(err)
    }
)
require.interceptors.response.use(
    (response: any) => {
        return response
    }, (err) => {
        return Promise.reject(err)
    }
)

export default require