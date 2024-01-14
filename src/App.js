import "./App.css";
import Footer from "./component/Footer";
import InputNote from "./component/InputNote";
import Header from "./component/Header";
import Note from "./component/Note";

function App() {
  return (
    <div className="App">
      <Header />
      <InputNote />
      <Note />

      <Footer />
    </div>
  );
}

export default App;
