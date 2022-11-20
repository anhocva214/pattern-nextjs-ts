import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'src/redux/reducer'
import { User } from 'src/models/response/user.model'
import { userApi } from '@apis/exports';


export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await userApi.getUsers()
        return response
    }
)


export interface UserState {
    users: User[];
    getUsersLoading: boolean;
}

export const initialState: UserState = {
    users: [],
    getUsersLoading: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.getUsersLoading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, { payload }: PayloadAction<User[]>) => {
                state.getUsersLoading = false;
                state.users = payload
            })
            .addCase(fetchUsers.rejected, (state, {error}) => {
                console.log("🚀 ~ file: user.redux.ts ~ line 43 ~ .addCase ~ error", error)
                state.getUsersLoading = false;
                state.users = []
            })
    },
})

export const userReducer = userSlice.reducer
export const userSelector = (state: RootState) => state.user

