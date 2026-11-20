
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let students = [];
let nextId = 1;

app.get("/", (req, res) => {
  res.send("Placement Skill Management API is Running");
});

app.post("/api/students", (req, res) => {
  const student = {
    id: nextId++,
    ...req.body
  };

  students.push(student);

  res.status(201).json({
    message: "Student added successfully",
    student
  });
});

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.put("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = students.findIndex(
    (student) => student.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  students[index] = {
    ...students[index],
    ...req.body,
    id
  };

  res.json({
    message: "Student updated successfully",
    student: students[index]
  });
});

app.delete("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = students.findIndex(
    (student) => student.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  students.splice(index, 1);

  res.json({
    message: "Student deleted successfully"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
