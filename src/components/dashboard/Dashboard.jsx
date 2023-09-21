import React from "react";
import { useNavigate } from "react-router-dom";
import JSON from "../../students.json";
// import { Form, Button } from "react-bootstrap";


const Dashboard = () => {
  const history = useNavigate();

  // const handleButtonClick = () => {
  //   // Redirect to the student component page
  //   window.location.href = "/Student";
  // };

  return (
    <div className="Dasboard-Table">
      {/* <button className="btn-1" onClick={handleButtonClick}>
        <b>Go To Student List Page</b>
      </button> */}
      <span>
        {/* <button id="btn-2" onClick={() => history("/")}>
          <b>Logout</b>
        </button> */}
      </span>
      <div className="text-center fs-3 mb-2">Welcome to Students Lists Page</div>
      <table className="table">
        <tr>
          <th>Student Id</th>
          <th>Student Name</th>
          <th>Department</th>
          <th>Course Name</th>
          <th>Name Of Institute</th>
          <th>View Full Detials</th>
        </tr>
        {JSON.Dashboard.map((res, index) => (
          <tr key={index}>
            <td>{res.studentId}</td>
            <td>{res.studentName}</td>
            <td>{res.deparment}</td>
            <td>{res.courseName}</td>
            <td>{res.instituteName}</td>
            <td>
              <button
                className="btn2"
                onClick={() => history(`/SingleStudent?${res.studentId}`)}
              >
                Views Details
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default Dashboard;
