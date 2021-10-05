import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/reducer'

export interface UserState {

}

export const initialState: UserState = {
    
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        user: (state, {payload}: PayloadAction<string>) => {
            
        },
    },
})

export const sliceActions = userSlice.actions
export const userReducer = userSlice.reducer
export const userSelector = (state: RootState) => state.user