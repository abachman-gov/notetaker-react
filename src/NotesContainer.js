import { useEffect, useState } from "react";

const NoteView = ({ note }) => {
  console.log("[NoteView]", note);
  return (
    <p class="note">
      <em>{note.created_at}</em>: {note.content}
    </p>
  );
};

export const NotesContainer = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/notes.json")
      .then((response) => {
        console.log("got response", response);
        return response.json();
      })
      .then((json) => {
        console.log("got json", json);
        setNotes(json);
      });
  }, []);

  return (
    <div class="notes">
      {notes.map((note) => {
        console.log("render note", note);
        return <NoteView key={note.id} note={note} />;
      })}
    </div>
  );
};
