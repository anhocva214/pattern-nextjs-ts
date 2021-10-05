import { AppThunk, dispatch } from '@store/index'
import { sliceActions } from '@slices/alert.slice'


const exampleThunk = (): AppThunk => async (dispatch) => {
    
}


export const alertActions = {
    alertSuccess: (text: string)=> dispatch(sliceActions.alertSuccess(text)),
    alertError: (text: string) => dispatch(sliceActions.alertError(text)),
}