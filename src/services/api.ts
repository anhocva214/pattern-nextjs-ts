
import axios, {Method} from 'axios';
import cookie from 'react-cookies';


const ErrorResponse = (e: any) => {
    try {
        console.log("----------------------------------------------")
        console.log("Status: ", e.response.status);
        console.log("Data: ", e.response.data)
        console.log("----------------------------------------------")

        return { ...e.response.data}
    }
    catch (err) {
        console.log(err)
        return err
    }
}

interface IPramsRequest{
    url: string,
    method: Method,
    headers?: any,
    data?: any,
}

const AxiosBasic = async ({url, method, headers, data}: IPramsRequest)=>{
    return await axios({
        url:  process.env.ENDPOINT + url,
        method,
        headers:{
            token: cookie.load('token'),
            ...headers
        },
        data
    }).then(({data})=>{
        return { ...data }
    }).catch(e => ErrorResponse(e))
}

export default AxiosBasic