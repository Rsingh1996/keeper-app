import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const Note = (props) => {
  return (
    <div className="note">
      <h1>{props.id}</h1>
      <p>{}</p>
      <span>
        <DeleteIcon />
      </span>
    </div>
  );
};

export default Note;
