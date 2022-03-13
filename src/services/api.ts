import axios, {Method} from 'axios';
import cookie from 'react-cookies';


const ErrorResponse = (e: any) => {
    try {
        return {...e.response.data, statusCode: e.response.status}
    }
    catch (err) {
        console.log(err)
        return {
            data: null,
            status: 500
        }
    }
}

interface IPramsRequest{
    url: string,
    method: Method,
    headers?: any,
    data?: any,
}


export async function baseApi({url, method, headers, data}: IPramsRequest): Promise<any>{
    return new Promise((resolve, reject) => {
        // console.log("process.env.ENDPOINT ", process.env.ENDPOINT)
        return axios({
            url:  process.env.ENDPOINT + url,
            method,
            headers:{
                Authorization: 'Bearer ' + cookie.load('access_token'), 
                ...headers
            },
            data
        }).then(({data})=>{
            resolve(data)
        }).catch(e => reject(ErrorResponse(e)))
    })
}