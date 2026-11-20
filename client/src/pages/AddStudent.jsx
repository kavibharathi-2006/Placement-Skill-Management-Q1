
import { useState } from "react";
import API from "../api";

function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    rollNumber: "",
    technicalSkills: "",
    aptitudeScore: "",
    communicationSkills: "",
    placementReadiness: "Not Ready"
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/students", student);

      alert("Student added successfully!");

      setStudent({
        name: "",
        rollNumber: "",
        technicalSkills: "",
        aptitudeScore: "",
        communicationSkills: "",
        placementReadiness: "Not Ready"
      });
    } catch (error) {
      alert("Failed to add student");
    }
  };

  return (
    <div>
      <h1>Add Student Skills</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="rollNumber"
          placeholder="Roll Number"
          value={student.rollNumber}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="technicalSkills"
          placeholder="Technical Skills"
          value={student.technicalSkills}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="number"
          name="aptitudeScore"
          placeholder="Aptitude Score"
          value={student.aptitudeScore}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="communicationSkills"
          placeholder="Communication Skills"
          value={student.communicationSkills}
          onChange={handleChange}
          required
        />

        <br /><br />

        <select
          name="placementReadiness"
          value={student.placementReadiness}
          onChange={handleChange}
        >
          <option value="Ready">Ready</option>
          <option value="Not Ready">Not Ready</option>
        </select>

        <br /><br />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
