import React from "react";
import JSON from "./students.json";
import { useLocation } from "react-router-dom";

function SingleStudent(props) {
  const location = useLocation();
  let studentId = location.search;
  studentId = studentId.replace("?", "");
  console.log(location);
  const data = JSON.Dashboard.find((item) => item.studentId === studentId);
  return (
    <div className="para1">
      <h2 id="heading-1">Student Information:-</h2>
      <ul className="List-items">
        <li>Id : {data.studentId}</li>
        <li>Name : {data.studentName}</li>
        <li>Department :{data.deparment}</li>
        <li>Course Name : {data.courseName}</li>
        <li>Name of Institute : {data.instituteName}</li>
        <li>School Name : Shree N.V Patel Vidhymandir : {data.SchoolName} </li>
      </ul>
    </div>
  );
}

export default SingleStudent;
