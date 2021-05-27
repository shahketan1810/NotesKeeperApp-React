import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleNote = (event) => {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  return (
    <div>
      <form>
        <input
          onChange={handleNote}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          onClick={(event) => {
            props.addNote(note);
            setNote({ title: "", content: "" });
            event.preventDefault();
          }}
        >
        +
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
