import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea.jsx";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prev) => {
      return [...prev, note];
    });
  };

  const deleteNote = (id) => {
    setNotes((prev) => {
      return prev.filter((note, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;