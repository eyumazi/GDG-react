import { useState } from "react";

export const Note = () => {
  const [text, setText] = useState("Your note goes here");
  const [edit, setEdit] = useState(false);
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleEditNote = (index) => {
    setText(notes[index]);
    setEdit(true);
    setEditIndex(index);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const handleAddNote = () => {
    if (edit) {
      const updatedNotes = notes.map((note, index) =>
        index === editIndex ? text : note
      );
      setNotes(updatedNotes);
      setEdit(false);
      setEditIndex(null);
    } else {
      setNotes([...notes, text]);
    }
    setText("");
  };

  const AddNote = () => {
    return (
      <>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              {note}
              <button onClick={() => handleEditNote(index)}>Edit</button>
              <button onClick={() => handleDeleteNote(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(
            edit
              ? "Your note is updated successfully"
              : "Your note is added successfully"
          );
          handleAddNote();
        }}
      >
        <textarea
          onChange={(e) => setText(e.target.value)}
          value={text}
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">{edit ? "Update Note" : "Add Note"}</button>
        <br />
      </form>

      <AddNote />
    </>
  );
};
