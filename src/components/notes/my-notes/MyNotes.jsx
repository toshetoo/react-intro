import React from 'react';
import { useState, useEffect } from 'react';
import { NoteCard } from '../note-card/NoteCard';
import { getMyNotes } from '../../../core/api/notes.api';

export function MyNotes() {
    const [userNotes, setUserNotes] = useState([]);

    useEffect(() => {
        getMyNotes().then((notes) => {
            setUserNotes(notes);
        });
    }, []);
    
    return (
        <div className="my-notes-wrapper">
            { userNotes.map(note => <NoteCard note={note} key={note.id} /> ) }
        </div>
    )
}