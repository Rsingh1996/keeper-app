import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const Note = (props) => {
  const handleClick = () => {
    props.deleteNote(props.id);
  };
  return (
    <div key={props.id} className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <span onClick={handleClick}>
        <DeleteIcon />
      </span>
    </div>
  );
};

export default Note;
