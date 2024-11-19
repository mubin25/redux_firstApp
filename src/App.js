import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { addStudent, removeStudent } from './Redux/Action';


function App() {
  const[studentName,setStudentName] = useState("");
  
  const disptach = useDispatch();

  const students = useSelector((state) => state.students)

  const handleAddStudent = () =>{
      if(studentName.trim() !== ""){ 
        disptach(addStudent({name:studentName}));
        setStudentName("");
      }
  }

  const handleRemoveStudent = (name) => {
    disptach(removeStudent(name));
  };
  return (
    <div className="App">
     <h1>List of Students </h1>
     <input 
     type = "text" 
     value={studentName} 
     onChange={(e) => setStudentName(e.target.value)} 
     placeholder='Enter your Name'/>
     <button onClick={handleAddStudent}>Add Student</button>
     <ul>
      {students.map((student, index) =>(
      <li key={index}>
        {student.name}
        <button onClick={() => handleRemoveStudent(student.name)}>Remove Button</button>
      </li>
      ))
      }
     </ul>
    </div>
  );
}

export default App;
