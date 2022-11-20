import { configureStore, Action, MiddlewareArray, AnyAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import thunk, { ThunkDispatch } from 'redux-thunk'
import logger from 'redux-logger'


import rootReducer, { RootState } from './reducer'

const store = configureStore({
    reducer: rootReducer,
    middleware: new MiddlewareArray().concat(thunk, logger)
})

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export default store