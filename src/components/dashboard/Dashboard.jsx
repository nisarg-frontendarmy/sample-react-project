import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const Dashboard = () => {
  const history = useNavigate();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?per_page=12")
      .then((response) => {
        setStudents(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleViewDetailsClick = (studentId) => {
    history(`/SingleStudent?${studentId}`);
  };

  return (
    <div className="text-center w-100 vh-100 main-div19">
      <div className="fs-2 mb-4 text-black bg-white ">
        <div>Welcome to Student List Page</div>
      </div>

      <Table striped bordered hover size="sm" className="table w-100 mt-5   mx-auto main-div22">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>LastName</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.first_name}</td>
              <td>{student.last_name}</td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleViewDetailsClick(student.id)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
