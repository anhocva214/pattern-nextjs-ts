import axios, {AxiosRequestConfig, Method} from 'axios';
import cookie from 'react-cookies';


export async function baseApi<T>(config: AxiosRequestConfig): Promise<T>{
    return new Promise((resolve, reject) => {
        // console.log("process.env.ENDPOINT ", process.env.ENDPOINT)
        return axios({
            ...config,
            headers:{
                Authorization: 'Bearer ' + cookie.load('access_token'), 
                ...config.headers
            },
            timeout: 10*1000
        }).then(({data})=>{
            resolve(data)
        }).catch(e => reject(e))
    })
}