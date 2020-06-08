
import { GET_ALL_USERS, DELETE_USER, EDIT_USER, FETCH_USER_BY_ID, SAVE_USER } from './../actions/action-types';
const initialState = {
    users: [],
    user: {}
}

export function usersReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ALL_USERS: 
            return { ...state, users: action.payload };
        case DELETE_USER: 
            return { ...state, users: state.users.filter(u => u.id !== action.payload )};

        case EDIT_USER:
            return { ...state, user: { ...state.user, ...action.payload }}; 
        
        case FETCH_USER_BY_ID: 
            return { ...state, user: action.payload };

        case SAVE_USER: 
            return { ...state, users: [...state.user.filter(u => u.id !== action.payload.id), action.payload ] }

        default: 
            return state;
    }
}