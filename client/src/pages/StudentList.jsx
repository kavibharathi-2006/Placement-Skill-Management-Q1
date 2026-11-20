
import { useState, useEffect } from "react";
import API from "../api";

function StudentList() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await API.get("/students");
      setStudents(response.data);
    } catch (error) {
      console.log("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleUpdate = async (student) => {
    const newScore = prompt(
      "Enter new Aptitude Score:",
      student.aptitudeScore
    );

    if (newScore === null || newScore.trim() === "") {
      return;
    }

    try {
      await API.put(`/students/${student.id}`, {
        aptitudeScore: newScore
      });

      alert("Student updated successfully!");
      fetchStudents();
    } catch (error) {
      alert("Failed to update student");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await API.delete(`/students/${id}`);
      alert("Student deleted successfully!");
      fetchStudents();
    } catch (error) {
      alert("Failed to delete student");
    }
  };

  return (
    <div>
      <h1>Student Skill List</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Technical Skills</th>
            <th>Aptitude Score</th>
            <th>Communication Skills</th>
            <th>Placement Readiness</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.rollNumber}</td>
                <td>{student.technicalSkills}</td>
                <td>{student.aptitudeScore}</td>
                <td>{student.communicationSkills}</td>
                <td>{student.placementReadiness}</td>
                <td>
                  <button onClick={() => handleUpdate(student)}>
                    Update
                  </button>
                  {" "}
                  <button onClick={() => handleDelete(student.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No Records</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
