import { useState, useEffect } from "react";
import axios from "axios";

function Studentlist() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("https://thetestingworldapi.com/api/studentsDetails")
      .then((response) => {
        // console.log(response)
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.studentId}>
            Student ID: {student.studentId}
            <br />
            Student Name: {student.studentName}
            <br />
            Department: {student.department}
            <br />
            Course Name: {student.courseName}
            <br />
            Institute Name: {student.instituteName}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Studentlist;
