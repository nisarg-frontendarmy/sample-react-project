import React from "react";
import { useNavigate } from "react-router-dom";
import JSON from "../../students.json";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Dashboard = () => {
  const history = useNavigate();

  const listItemStyle = {
    backgroundColor: "transparent",
    border: "1px solid grey",
    padding: "12px",
    opacity: "10",
  };

  return (
    <div className="text-center w-100 vh-100 main-div19">
      <div className="fs-2 mb-4 text-white">Welcome to Students Lists Page</div>
      <Table className="w-100">
        <thead>
          <tr className="w-5 mt-10">
            <th className="text-white bg-secondary" style={listItemStyle}>Student Id</th>
            <th className="text-white bg-secondary" style={listItemStyle}>Student Name</th>
            <th className="text-white bg-secondary" style={listItemStyle}>Department</th>
            <th className="text-white bg-secondary" style={listItemStyle}>Course Name</th>
            <th className="text-white bg-secondary" style={listItemStyle}>Name Of Institute</th>
            <th className="text-white bg-secondary" style={listItemStyle}>View Full Details</th>
          </tr>
        </thead>
        <tbody>
          {JSON.Dashboard.map((res, index) => (
            <tr key={index}>
              <td className="text-white"  style={listItemStyle}>{res.studentId}</td>
              <td className="text-white"  style={listItemStyle}>{res.studentName}</td>
              <td className="text-white"  style={listItemStyle}>{res.department}</td>
              <td className="text-white"  style={listItemStyle}>{res.courseName}</td>
              <td className="text-white"  style={listItemStyle}>{res.instituteName}</td>
              <td className="text-white"  style={listItemStyle}>
                <Button
                  variant="secondary"
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
