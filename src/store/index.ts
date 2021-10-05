import { configureStore, Action } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { ThunkAction } from 'redux-thunk'
import thunk from 'redux-thunk'

import rootReducer, { RootState } from './reducer'

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})

export type AppDispatch = typeof store.dispatch
export const dispatch = store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action>

export default store