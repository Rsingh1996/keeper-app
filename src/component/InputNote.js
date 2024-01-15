import React from "react";
import { useState } from "react";

const InputNote = ({ takeNote }) => {
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
  };

  return (
    <div>
      <form>
        <input
          value={noteData.title}
          name="title"
          placeholder="Title"
          onChange={hadleChange}
        />
        <textarea
          value={noteData.content}
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
