import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchStudentsAsync
} from "../../features/slice/studentslice";

const Dashboard = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const { students } = useSelector((state) => state.studentslice);

  useEffect(() => {
    dispatch(fetchStudentsAsync());
  }, [dispatch]);

  const handleViewDetailsClick = (studentId) => {
    history(`/SingleStudent?${studentId}`);
  };

  return (
    <div className="text-center w-100 vh-100 main-div19">
      <div className="fs-2 mb-4 text-black bg-white ">
        <div>Welcome to Student List Page</div>
      </div>

      <Table
        striped
        bordered
        hover
        size="lg"
        className="table w-100 mt-5 mx-auto main-div22"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>

        {students && students.length > 0 ? (
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
        ) : (
          <tbody>
            <tr>
              <td colSpan="4">No students data available.</td>
            </tr>
          </tbody>
        )}
      </Table>
    </div>
  );
};

export default Dashboard;
