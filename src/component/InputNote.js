import React from "react";

const InputNote = () => {
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows={3} />
        <button type="button">Add</button>
      </form>
    </div>
  );
};

export default InputNote;
