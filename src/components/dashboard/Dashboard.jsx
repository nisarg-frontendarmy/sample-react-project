import React from "react";
import { useNavigate } from "react-router-dom";
import JSON from "../../students.json";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Dashboard = () => {
  const history = useNavigate();

  const listItemStyle = {
    backgroundColor: "transparent",
    border: "1px solid black",
  };

  return (
    <div className="text-center w-50 w-100">
      <div className="fs-2 mb-4">Welcome to Students Lists Page</div>
      <Table className="w-100">
        <thead>
          <tr className="bg-dark">
            <th className="text-white" style={listItemStyle}>Student Id</th>
            <th className="text-white" style={listItemStyle}>Student Name</th>
            <th className="text-white" style={listItemStyle}>Department</th>
            <th className="text-white" style={listItemStyle}>Course Name</th>
            <th className="text-white" style={listItemStyle}>Name Of Institute</th>
            <th className="text-white" style={listItemStyle}>View Full Details</th>
          </tr>
        </thead>
        <tbody>
          {JSON.Dashboard.map((res, index) => (
            <tr key={index}>
              <td style={listItemStyle}>{res.studentId}</td>
              <td style={listItemStyle}>{res.studentName}</td>
              <td style={listItemStyle}>{res.department}</td>
              <td style={listItemStyle}>{res.courseName}</td>
              <td style={listItemStyle}>{res.instituteName}</td>
              <td style={listItemStyle}>
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
