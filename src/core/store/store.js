import { createStore, applyMiddleware } from 'redux';
import { usersReducer } from '../reducers/users-reducer';
import thunk from 'redux-thunk';

export const store = createStore(usersReducer, applyMiddleware(thunk));