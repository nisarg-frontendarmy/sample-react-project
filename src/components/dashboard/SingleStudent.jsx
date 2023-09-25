import React from "react";
import JSON from "../../students.json";
import { useLocation } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';

function SingleStudent(props) {
  const location = useLocation();
  let studentId = location.search;
  studentId = studentId.replace("?", "");
  console.log(location);
  const data = JSON.Dashboard.find((item) => item.studentId === studentId);


  const listItemStyle = {
    backgroundColor:'transparent',
    border:'none',
    color:'white',
  };

  return (
    <div className="border border-black w-50 m-5">
      <div className="text-left fs-2 text-white bg-dark">Student Information:</div>
      <ListGroup>
        <ListGroup.Item className="text-black" style={listItemStyle}>Id : {data.studentId}</ListGroup.Item>
        <ListGroup.Item className="text-black" style={listItemStyle}>Name : {data.studentName}</ListGroup.Item>
        <ListGroup.Item className="text-black" style={listItemStyle}>Department : {data.department}</ListGroup.Item>
        <ListGroup.Item className="text-black" style={listItemStyle}>Course Name : {data.courseName}</ListGroup.Item>
        <ListGroup.Item className="text-black" style={listItemStyle}>Name of Institute : {data.instituteName}</ListGroup.Item>
        <ListGroup.Item className="text-black" style={listItemStyle}>School Name : Shree N.V Patel Vidhymandir : {data.SchoolName}</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default SingleStudent;
