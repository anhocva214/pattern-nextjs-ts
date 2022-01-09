import { AppThunk, dispatch } from '@store/index'
import { sliceActions } from '@slices/user.slice'
import * as UserApis from '@apis/user-api'
import { User } from 'src/models/response/user.model'


export const getUsers = (): AppThunk => async (dispatch) => {
    let users : User[] = await UserApis.test();
    // console.log(users)
    dispatch(sliceActions.getUsers(users))
}
