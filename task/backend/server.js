const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());

const studentDataPath = path.resolve(__dirname, "student_data.json");
let students = [];

try {
  const data = fs.readFileSync(studentDataPath, "utf-8");
  students = JSON.parse(data);
} catch (error) {
  console.error("❌ Error reading student_data.json:", error);
}

app.get("/search", (req, res) => {
  const query = req.query.q ? req.query.q.toLowerCase() : "";
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query)
  );
  res.json(filteredStudents);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
