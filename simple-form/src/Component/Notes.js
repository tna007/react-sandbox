import React from "react";

function Notes({ notes }) {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => {
          return <li key={note.id}>{note.message}</li>;
        })}
      </ul>
    </div>
  );
}

export default Notes;
