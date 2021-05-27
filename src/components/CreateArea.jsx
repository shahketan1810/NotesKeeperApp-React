import React, { useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [ifClick, setIfClick] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    if (note.title || note.content) {
      props.onAdd(note);
      setNote({
        title: "",
        content: ""
      });
      setIfClick(false);
    }
    event.preventDefault();
  }

  function handleClick() {
    setIfClick(true);
  }

  return (
    <div>
      <form className="create-note">
        <Zoom in={ifClick}>
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        </Zoom>
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={ifClick ? "3" : "1"}
          onClick={handleClick}
        />
        <Zoom in={ifClick}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
