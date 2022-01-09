import { AppThunk, dispatch } from '@store/index'
import { sliceActions } from '@slices/alert.slice'


export const alertSuccess = sliceActions.alertSuccess
export const alertError =sliceActions.alertError