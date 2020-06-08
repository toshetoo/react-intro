import { getAllUsers, deleteUser, getUserById, saveUser } from "../api/users.api"
import { GET_ALL_USERS, DELETE_USER, EDIT_USER, FETCH_USER_BY_ID, SAVE_USER } from "./action-types";

export function fetchAllUsersFromAPI(searchParam) {
    return dispatch => {
        getAllUsers(searchParam).then((users) => {
            dispatch({
                type: GET_ALL_USERS,
                payload: users
            });
        });
    }
}

export function deleteUserFromAPI(id) {
    return dispatch => {
        deleteUser(id).then(() => {
            dispatch({
                type: DELETE_USER, 
                payload: id
            })
        });
    }
}

export function editUser(userData) {
    return  dispatch => dispatch({
            type: EDIT_USER,
            payload: userData
    });
}

export function fetchUserById(id) {
    return dispatch => {
        getUserById(id).then((userInfo) => {
            dispatch({
                type: FETCH_USER_BY_ID,
                payload: userInfo
            })
        });
    }
}

export function saveUserInAPI(userData) {
    return dispatch => {
        saveUser(userData).then(() => {
            dispatch({
                type: SAVE_USER,
                payload: userData
            })
        })
    }
}