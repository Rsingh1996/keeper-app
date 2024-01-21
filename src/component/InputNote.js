import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { useState, useRef } from "react";

const InputNote = ({ takeNote }) => {
  const inputRef = useRef(null);
  const [isExpanded, setExpanded] = useState(false);
  const [noteData, setNoteData] = useState({ title: "", content: "" });

  const hadleChange = (e) => {
    const { name, value } = e.target;
    setNoteData((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    if (noteData.title === "" || noteData.content === "") {
      alert("Please fill all the details");
    } else {
      takeNote(noteData);
      setNoteData({ title: "", content: "" });
    }
    e.preventDefault();
    inputRef.current.focus();
  };

  const expand = () => {
    setExpanded(true);
  };

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            value={noteData.title}
            name="title"
            placeholder="Title"
            maxlength="10"
            onChange={hadleChange}
            ref={inputRef}
          />
        )}
        <textarea
          onClick={expand}
          value={noteData.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onChange={hadleChange}
        />
        <Zoom in={isExpanded}>
          <Fab type="button" onClick={handleClick}>
            <NoteAddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default InputNote;
