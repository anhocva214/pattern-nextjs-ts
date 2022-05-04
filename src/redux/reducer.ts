import { combineReducers } from '@reduxjs/toolkit'

/* PLOP_INJECT_IMPORT */
import { userReducer } from './user.redux'
import {alertReducer} from './alert.redux'


const rootReducer = combineReducers({
    /* PLOP_INJECT_USE */
    user: userReducer,
    alert: alertReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer