import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllNotes, deleteNote } from './../../../core/api/notes.api';
import { NoteCard } from '../note-card/NoteCard';

export function NotesList() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getAllNotes().then((result) => {
            setNotes(result.data);
        });
    }, [])

    const onDelete = (id) => {
        deleteNote(id).then(() => {
            setNotes((prevState) => {
                return prevState.filter(note => note.id !== id);
            })
        })
    };
    
    return (
        <div className="notes-list-wrapper">
            { notes.map(note => <NoteCard note={note} key={note.id} onDeleteClick={onDelete} /> )}
        </div>
    );
}