import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/reducer'
import { User } from 'src/models/response/user.model'

export interface UserState {
    users: User[];
}

export const initialState: UserState = {
    users: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUsers: (state, {payload}: PayloadAction<User[]>) => {
            state.users = payload
        },
    },
})

export const sliceActions = userSlice.actions
export const userReducer = userSlice.reducer
export const userSelector = (state: RootState) => state.user