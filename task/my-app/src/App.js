import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length < 3) {
      setResults([]); 
      return;
    }

    setLoading(true); 

    const timer = setTimeout(async () => {
      try {
        const res = await axios.get(`http://localhost:5000/search?q=${query}`);
        setResults(res.data);
      } catch (err) {
        console.error("Error fetching results:", err);
        setResults([]); 
      } finally {
        setLoading(false);
      }
    }, 500); 

    return () => clearTimeout(timer);
  }, [query]);
  return (
    <div className="container">
      <h1>Student Search</h1>
      <input
        type="text"
        placeholder="Search student..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setResults([]); 
          setSelectedStudent(null);
        }}
      />
      {loading && <p>Loading...</p>}
      {!loading && query.length >= 3 && results.length === 0 && (
        <p>❌ No results found</p>
      )}
      {results.length > 0 && (
        <ul className="dropdown">
          {results.map((student) => (
            <li key={student.id} onClick={() => setSelectedStudent(student)}>
              {student.name}
            </li>
          ))}
        </ul>
      )}
      {selectedStudent && (
        <div className="details">
          <h2>{selectedStudent.name}</h2>
          <p>Class: {selectedStudent.class}</p>
          <p>Roll Number: {selectedStudent.rollNumber}</p>
        </div>
      )}
    </div>
  );
}

export default App;
