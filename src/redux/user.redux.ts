import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'src/redux/reducer'
import { User } from 'src/models/response/user.model'
import { AppThunk } from '.';
import { userApi } from '@apis/exports';

export interface UserState {
    users: User[];
    getUsersLoading: boolean;
    count: number;
}

export const initialState: UserState = {
    users: [],
    getUsersLoading: false,
    count: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUsersSuccess: (state, {payload}: PayloadAction<User[]>) => {
            state.users = payload;
            state.getUsersLoading = false;
        },
        loadingGetUsers: (state) =>{
            state.getUsersLoading = true
        },
        getUsersFail: (state) => {
            state.getUsersLoading = false
        },
        increase: (state)=>{
            state.count += 1
        }
    },
})

export const userReducer = userSlice.reducer
export const userSelector = (state: RootState) => state.user
export const actions = userSlice.actions

/*--------------------------*/
/*------- ACTIONS ----------*/
/*--------------------------*/

const getUsers = (): AppThunk => async (dispatch) => {
    dispatch(actions.loadingGetUsers())
    try{
        let users: User[] = await userApi.getUsers()
        dispatch(actions.getUsersSuccess(users.map(user => new User(user))))
    }
    catch(e){   
        console.log(e)
        dispatch(actions.getUsersFail())
    }
}

const increase = (): AppThunk => async (dispatch) => {
    setTimeout(() => {
        dispatch(actions.increase())
    }, 4000);
}

export const userActions = {
    getUsers,
    increase
}
