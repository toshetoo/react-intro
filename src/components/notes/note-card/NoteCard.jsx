import React from 'react';
import { Link } from 'react-router-dom';
import { getLoggedUser } from '../../../core/api/users.api';

const noteCardStyle = {
    maxWidth: '18rem'
};

const deleteBtnStyles = {
    cursor: 'pointer'
};

export function NoteCard({ note, onDeleteClick }) {
    const loggedUser = getLoggedUser();

    return (
    <div className="card text-white bg-secondary mb-3" style={noteCardStyle}>
        <div className="card-header">
            {note.title}
            { (loggedUser.isAdmin || loggedUser.id === note.authorId) && <Link to={`/notes/edit/${note.id}`} > Edit </Link> }
    { (loggedUser.isAdmin || loggedUser.id === note.authorId) && <span style={deleteBtnStyles} onClick={() => onDeleteClick(note.id)}>Delete</span> }
        </div>
        <div className="card-body">
            <p className="card-text">{note.content}</p>
        </div>
        <div className="card-footer bg-transparent border-secondary">
            <div>Author: {note.authorName}</div>
            <div>Created on: {note.date}</div>
        </div>
    </div>
    )
}