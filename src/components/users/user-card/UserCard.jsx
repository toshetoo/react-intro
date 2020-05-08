import React from 'react';
import './UserCard.css';
import { Link } from 'react-router-dom';

export function UserCard({ user }) {
    return (
        <div className="user-card">
            <div className="picture-holder">
                <span className="edit-icon">
                    <Link to={`/users/edit/${user.id}`}>E</Link>
                </span>
                <img src={user.picture} alt={user.name} />
            </div>
            <div className="info-holder">
                <div className="name"><Link to={`/users/${user.id}`}>{user.name}</Link></div>
                <div className="age">Age: {user.age}</div>
                <div className="email">Email: {user.email}</div>
            </div>
            
        </div>
    );
}