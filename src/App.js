import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
