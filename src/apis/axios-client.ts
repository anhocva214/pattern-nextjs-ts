import axios, {AxiosRequestConfig, Method} from 'axios';
import { getCookie } from 'cookies-next';



export async function axiosClient<T>(config: AxiosRequestConfig): Promise<T>{
    return new Promise((resolve, reject) => {
        // console.log("process.env.ENDPOINT ", process.env.ENDPOINT)
        return axios({
            baseURL: process.env.ENDPOINT,
            ...config,
            headers:{
                Authorization: 'Bearer ' + getCookie('access_token'), 
                ...config.headers
            },
        }).then(({data})=>{
            resolve(data)
        }).catch(e => reject(e))
    })
}