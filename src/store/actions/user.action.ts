import { AppThunk, dispatch } from '@store/index'
import { sliceActions } from '@slices/user.slice'
import * as UserApis from '@apis/user-api'
import { User } from 'src/models/response/user.model'


const getUsers = (): AppThunk => async (dispatch) => {
    let users : User[] = await UserApis.test();
    // console.log(users)
    dispatch(sliceActions.getUsers(users))
}


export const userActions = {
    getUsers: ()=> dispatch(getUsers() as any),
}