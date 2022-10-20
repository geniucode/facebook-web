import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Signup } from "./components/signup/index.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
