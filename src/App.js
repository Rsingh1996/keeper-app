import "./App.css";
import Footer from "./component/Footer";
import InputNote from "./component/InputNote";
import Header from "./component/Header";
import Note from "./component/Note";
import { useState, useEffect } from "react";
function App() {
  const localStorageKey = "notes";
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(notes));
  }, [notes]);

  const takeNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => index !== id);
    });
  };

  return (
    <div className="App">
      <Header />
      <InputNote takeNote={takeNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
