import React from 'react';
import { Link } from 'react-router-dom';

const noteCardStyle = {
    maxWidth: '18rem'
};

export function NoteCard({ note }) {
    return (
    <div className="card text-white bg-secondary mb-3" style={noteCardStyle}>
        <div className="card-header">
            {note.title}
            <Link to={`/notes/edit/${note.id}`} > Edit </Link>
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