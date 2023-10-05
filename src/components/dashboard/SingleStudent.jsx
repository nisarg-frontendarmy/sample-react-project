import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";

function SingleStudent(props) {
  const location = useLocation();
  let studentId = location.search;
  studentId = studentId.replace("?", "");
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    axios
    .get(`https://reqres.in/api/users/${studentId}`)
      .then((response) => {
        setStudentData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching student data: ", error);
      });
  }, [studentId]);

  const listItemStyle = {
    backgroundColor: "transparent",
    border: "none",
    color: "white",
  };

  return (
    <div className="border border-black w-50 m-5">
      <div className="text-left fs-2 text-white bg-dark">
        Student Information:
      </div>
      {studentData ? (
        <ListGroup>
          <ListGroup.Item className="text-black" style={listItemStyle}>
            ID : {studentData.id}
          </ListGroup.Item>
          <ListGroup.Item className="text-black" style={listItemStyle}>
            First Name : {studentData.first_name}
          </ListGroup.Item>
          <ListGroup.Item className="text-black" style={listItemStyle}>
            Last Name : {studentData.last_name}
          </ListGroup.Item>
          <ListGroup.Item className="text-black" style={listItemStyle}>
            Email: {studentData.email}
          </ListGroup.Item>
        </ListGroup>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default SingleStudent;
