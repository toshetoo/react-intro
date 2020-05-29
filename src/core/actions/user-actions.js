import { getAllUsers, deleteUser } from "../api/users.api"
import { GET_ALL_USERS, DELETE_USER } from "./action-types";

export function fetchAllUsersFromAPI() {
    return dispatch => {
        getAllUsers().then((users) => {
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