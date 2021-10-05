import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/reducer'
import Alert from 'react-s-alert';

export interface AlertState {

}

export const initialState: AlertState = {
    
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        alertSuccess: (state, {payload}: PayloadAction<string>) => {
            Alert.success(payload, {
                position: 'top-right',
                effect: 'slide',
                timeout: 3000,
            });
        },
        alertError: (state, {payload}: PayloadAction<string>) => {
            Alert.error(payload, {
                position: 'top-right',
                effect: 'slide',
                timeout: 3000,
            });
        },
    },
})

export const sliceActions = alertSlice.actions
export const alertReducer = alertSlice.reducer
export const alertSelector = (state: RootState) => state.alert