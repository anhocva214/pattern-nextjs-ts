import { createStore , applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducer/'


const store = createStore(
    rootReducer, 
    applyMiddleware(thunk),
);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const dispatch = store.dispatch;
export default store;
