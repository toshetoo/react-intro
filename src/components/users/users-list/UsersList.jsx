import React, { useEffect } from 'react';
import { UserCard } from '../user-card/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsersFromAPI, deleteUserFromAPI } from './../../../core/actions/user-actions';

const usersListStyle = {
    flexWrap: 'wrap'
};

export function UsersList(props) {
    const dispatch = useDispatch();

    console.log(props);
    const users = useSelector(state => state.users);

    useEffect(() => {
        const searchParam = props.location.search.split('=')[1];
        dispatch(fetchAllUsersFromAPI(searchParam));
    }, [props.location.search, dispatch]);

    const onUserDelete = (id) => {
        dispatch(deleteUserFromAPI(id));
    }

    return (
        <div className="users-list d-flex" style={usersListStyle}>
            {users.map((user) => <UserCard user={user} key={user.id} onDelete={onUserDelete} />)}
        </div>
    );
}