import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const Note = (props) => {
  const handleClick = () => {
    props.deleteNote(props.id);
  };
  return (
    <div key={props.id} className="note">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <span onClick={handleClick}>
        <DeleteIcon />
      </span>
    </div>
  );
};

export default Note;
