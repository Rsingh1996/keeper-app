import "./App.css";
import Footer from "./component/Footer";
import InputNote from "./component/InputNote";
import Header from "./component/Header";
import Note from "./component/Note";
import { useState } from "react";
import uuid4 from "uuid4";
function App() {
  const [note, setNote] = useState([]);

  const takeNote = (data) => {
    setNote([...note, data]);
  };
  console.log(note);
  return (
    <div className="App">
      <Header />
      <InputNote takeNote={takeNote} />
      <Note note={note} />
      <Footer />
    </div>
  );
}

export default App;
