
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import StudentList from "./pages/StudentList";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div>
        <h1>Placement Skill Monitoring Management System</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/add-student">Add Student Skills</Link>
          <Link to="/student-list">Student Skill List</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/student-list" element={<StudentList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
