import React from "react";
import { useNavigate } from "react-router-dom";
import JSON from "../../students.json";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Dashboard = () => {
  const history = useNavigate();

  return (
    <div className="text-center w-100">
      <div className="fs-2 mb-2">Welcome to Students Lists Page</div>
      <Table variant="secondary">
        <thead>
          <tr>
            <th>Student Id</th>
            <th>Student Name</th>
            <th>Department</th>
            <th>Course Name</th>
            <th>Name Of Institute</th>
            <th>View Full Details</th>
          </tr>
        </thead>
        <tbody>
          {JSON.Dashboard.map((res, index) => (
            <tr key={index}>
              <td>{res.studentId}</td>
              <td>{res.studentName}</td>
              <td>{res.deparment}</td>
              <td>{res.courseName}</td>
              <td>{res.instituteName}</td>
              <td>
                <Button
                  variant="success"
                  className="mx-auto d-flex justify-content-center"
                  onClick={() => history(`/SingleStudent?${res.studentId}`)}
                >
                  View Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
