import {dispatch} from '@/store/index'
import { NotiType } from '../type'

const AlertSuccess = (message: string) => {
    return {
        type: NotiType.ALERT_SUCCESS,
        msg: message
    }
}

const AlertError = (message: string) => {
    return { 
        type: NotiType.ALERT_ERROR, 
        msg: message
    }
}

// const AlertError = () => async (dispatch) =>{
//     dispatch({
//         type: NotiType.ALERT_ERROR,
//         msg: "message"
//     })
// }

const NotiAction = {
    AlertSuccess: (message: string) => dispatch(AlertSuccess(message)),
    AlertError: (message: string) => dispatch(AlertError(message))
    // AlertError: () => dispatch(AlertError() as any)
}

export default NotiAction ;