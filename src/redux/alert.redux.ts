import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'src/redux/reducer'
import Alert from 'react-s-alert';
import { AppThunk } from '.';

export interface AlertState {

}

export const initialState: AlertState = {
    
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
       
    },
})

export const alertReducer = alertSlice.reducer
export const alertSelector = (state: RootState) => state.alert
export const actions = alertSlice.actions


/*--------------------------*/
/*------- ACTIONS ----------*/
/*--------------------------*/

const success = (message: string): AppThunk => async (dispatch) => {
    Alert.success(message, {
        position: 'top-right',
        effect: 'slide',
        timeout: 3000,
    });
}

const error = (message: string): AppThunk => async (dispatch) => {
    Alert.error(message, {
        position: 'top-right',
        effect: 'slide',
        timeout: 3000,
    });
}



export const alertActions = {
    success,
    error
}