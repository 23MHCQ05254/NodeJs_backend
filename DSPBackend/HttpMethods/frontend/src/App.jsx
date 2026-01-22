import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
 
  const API = "http://localhost:7007/api/students";

  // get
  const fetchStudents = async () => {
    const res = await axios.get(API);
    setStudents(res.data);
  }; 

  
  // post
  const addStudent = async () => {
    await axios.post(API, { name });
    setName("");
    fetchStudents();
  };

  // put
  const updateStudent = async (id) => {
    const newName = prompt("Enter new name");
    await axios.put(`${API}/${id}`, {
       name: newName 
    });

    fetchStudents();
  };
 
 
  // delt
  const deleteStudent = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>HTTP Methods Demo</h2>

      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addStudent}>Add</button>

      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name}
            <button onClick={() => updateStudent(s.id)}>Edit</button>
            <button onClick={() => deleteStudent(s.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
