import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home.js";
import { About } from "./components/About";
import NoteState from "./context/notes/NotesState";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
          </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
