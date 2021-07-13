
import axios from 'axios';
import {
    API_CHECK_TOKEN,
} from './apis';
import cookie from 'react-cookies';


const ErrorResponse = (e: any) => {
    try {
        // console.log(e.response)
        console.log("Status: ", e.response.status);
        console.log("Data: ", e.response.data)
        return { ...e.response.data, auth: false }
    }
    catch (err) {
        console.log(err)
        return {auth: false, err}
    }
}

const AxiosBasic = async ({url, method, headers, data})=>{
    return await axios({
        url,
        method,
        headers:{
            token: cookie.load('token'),
            ...headers
        },
        data
    }).then(({data})=>{
        return { ...data, auth: true }
    }).catch(e => ErrorResponse(e))
}