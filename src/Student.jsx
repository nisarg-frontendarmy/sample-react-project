import React from "react";
import { useNavigate } from "react-router-dom";

function Student() {
  const navigate = useNavigate();

  const handleButtonsClick = () => {
    // Redirect to the Single Student Details Page
    navigate("/SingleStudent");
  };
  const handleButtonclick1 = () => {
    // Redirect to the Single Student Details Page
    navigate("/SingleStudent1");
  };
  const handleButtonclick2 = () => {
    // Redirect to the Single Student Details Page
    navigate("/SingleStudent2");
  };
  return (
    <div className="student">
      <h2 id="heading">Single Student List Page</h2>
      <table className="single-student">
        <tr id="details">
          <th>Student Id</th>
          <th>Student Name</th>
          <th>Department</th>
          <th>Course Name</th>
          <th>Name of Institute</th>
          <th>View Full Details</th>
        </tr>
        <tr id="single-student">
          <td>1</td>
          <td>Emily Devis</td>
          <td>Computer Science</td>
          <td>Cyber Security</td>
          <td>Gujarat Power Engineering And Research Institute</td>
          <td>
            <button id="btn0" onClick={handleButtonsClick}>
              View Details
            </button>
          </td>
        </tr>
        <tr id="single-student">
          <td>2</td>
          <td>Michael Johnshon</td>
          <td>Computer Science</td>
          <td>Python</td>
          <td>Gujarat Power Engineering And Research Institute</td>
          <td>
            <button id="btn0" onClick={handleButtonclick1}>
              View Details
            </button>
          </td>
        </tr>
        <tr id="single-student">
          <td>3</td>
          <td>Sarah Brown</td>
          <td>Computer Science</td>
          <td>JavaScript</td>
          <td>Gujarat Power Engineering And Research Institute</td>
          <td>
            <button id="btn0" onClick={handleButtonclick2}>
              View Details
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Student;
