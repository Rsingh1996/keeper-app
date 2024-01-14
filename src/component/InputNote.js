import React from "react";
import { useState } from "react";

const InputNote = ({ takeNote }) => {
  const [noteData, setNoteData] = useState({ title: "", content: "" });

  const hadleChange = (e) => {
    if (e.target.name === "title") {
      setNoteData({ ...noteData, title: e.target.vaiue });
    } else {
      setNoteData({ ...noteData, content: e.target.vaiue });
    }
  };

  const handleClick = () => {
    if (noteData.title === "" || noteData.content === "") {
      alert("Please fill all the details");
    } else {
      takeNote(noteData);
      setNoteData({ title: "", content: "" });
    }
  };

  return (
    <div>
      <form>
        <input
          value={noteData.name}
          name="title"
          placeholder="Title"
          onChange={hadleChange}
        />
        <textarea
          value={noteData.name}
          name="content"
          placeholder="Take a note..."
          rows={3}
          onChange={hadleChange}
        />
        <button type="button" onClick={handleClick}>
          Add
        </button>
      </form>
    </div>
  );
};

export default InputNote;
