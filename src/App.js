import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Signup } from "./components/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Signup />} />
        <Route path="/user/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
