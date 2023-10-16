import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { updateStudent } from "../../features/slice/studentslice";
import { useDispatch } from "react-redux";

const EditStudent = () => {
  const { studentId } = useParams();
  const [studentData, setStudentData] = useState();
  const [editedData, setEditedData] = useState();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudentsData = async () => {
      try {
        const response = await fetch(
          `https://reqres.in/api/users/${studentId}`
        );
        if (response.ok) {
          const data = await response.json();
          setStudentData(data.data);
        } else {
          console.error("Failed to fetch student data");
        }
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchStudentsData();
  }, [studentId]);

  const handleSave = async () => {
    dispatch(updateStudent({ studentId, newData: editedData }));
    navigate("/dashboard");
    try {
      const response = await fetch(`https://reqres.in/api/users/${studentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      });

      if (response.ok) {
        console.log("Student data updated successfully");
        dispatch(updateStudent(studentId, editedData));
      } else {
        console.error("Failed to update student data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="student-wrapper">
      <h2>Edit Student Information</h2>
      <form className="form-container">
        <label>Id</label>
        <input
          type="text"
          value={editedData?.Id || studentData?.Id}
          onChange={(e) => setEditedData({ ...editedData, Id: e.target.value })}
        />
        <label>First Name:</label>
        <input
          type="text"
          value={editedData?.first_name || studentData?.first_name}
          onChange={(e) =>
            setEditedData({ ...editedData, first_name: e.target.value })
          }
        />
        <label>Last Name:</label>
        <input
          type="text"
          value={editedData?.Last_Name || studentData?.Last_Name}
          onChange={(e) =>
            setEditedData({ ...editedData, Last_Name: e.target.value })
          }
        />
        <label>Email:</label>
        <input
          type="text"
          value={editedData?.Email || studentData?.Email}
          onChange={(e) =>
            setEditedData({ ...editedData, Email: e.target.value })
          }
        />
        <button className="fs-large text-black bg-success" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default EditStudent;
