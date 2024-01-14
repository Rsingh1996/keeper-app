import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const Note = () => {
  return (
    <div className="note">
      <h1>Note</h1>
      <p>Paragraph</p>
      <span>
        <DeleteIcon />
      </span>
    </div>
  );
};

export default Note;
