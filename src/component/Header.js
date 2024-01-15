import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import DateTimeComponent from "./Datetime";

const Header = () => {
  return (
    <header>
      <h1>
        <HighlightIcon /> Keeper
      </h1>
      <DateTimeComponent />
    </header>
  );
};

export default Header;
