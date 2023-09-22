import React from "react";
import JSON from "./students.json";
import { useLocation } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';

function SingleStudent(props) {
  const location = useLocation();
  let studentId = location.search;
  studentId = studentId.replace("?", "");
  console.log(location);
  const data = JSON.Dashboard.find((item) => item.studentId === studentId);

  return (
    <div className="border w-50 m-5 p-2">
      <div className="text-left fs-2 text-white">Student Information:</div>
      <ListGroup>
        <ListGroup.Item>Id : {data.studentId}</ListGroup.Item>
        <ListGroup.Item>Name : {data.studentName}</ListGroup.Item>
        <ListGroup.Item>Department : {data.department}</ListGroup.Item>
        <ListGroup.Item>Course Name : {data.courseName}</ListGroup.Item>
        <ListGroup.Item>Name of Institute : {data.instituteName}</ListGroup.Item>
        <ListGroup.Item>School Name : Shree N.V Patel Vidhymandir : {data.SchoolName}</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default SingleStudent;
