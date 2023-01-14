import React from 'react';
import { addNote } from '../utils/local-data';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';
 
function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(notes) {
    addNote(notes);
    navigate('/');
  }
 
  return (
    <section>
        <h2>Catatan Baru</h2>
        <NoteInput addNote={onAddNoteHandler} />
    </section>
  )
}
 
export default AddPage;