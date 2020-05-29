
import { GET_ALL_USERS, DELETE_USER } from './../actions/action-types';
const initialState = {
    users: []
}

export function usersReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ALL_USERS: 
            return { ...state, users: action.payload };
        case DELETE_USER: 
            return { ...state, users: state.users.filter(u => u.id !== action.payload )}
        
        default: 
            return state;
    }
}