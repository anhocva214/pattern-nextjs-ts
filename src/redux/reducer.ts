import { combineReducers } from '@reduxjs/toolkit'

/* PLOP_INJECT_IMPORT */
import { userReducer } from './user.redux'


const rootReducer = combineReducers({
    /* PLOP_INJECT_USE */
    user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer