import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleStudentAsync } from "../../features/slice/studentslice";
import { ListGroup, Image } from "react-bootstrap";

const SingleStudent = () => {
  const { studentId } = useParams();
  const dispatch = useDispatch();
  const { singleStudent } = useSelector((state) => state.singleStudent);
  console.log("singleStudent", singleStudent);

  useEffect(() => {
    dispatch(fetchSingleStudentAsync(studentId));
  }, [dispatch, studentId]);

  if (!singleStudent) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border border-black w-50 m-5">
      <div className="text-left p-2 fs-2 text-white bg-dark">
        Student Information
      </div>
      <ListGroup>
        <ListGroup.Item className="text-black border-bottom-0">
          ID : {singleStudent.id}
        </ListGroup.Item>
        <ListGroup.Item className="text-black border-bottom-0">
          First Name : {singleStudent.first_name}
        </ListGroup.Item>
        <ListGroup.Item className="text-black border-bottom-0">
          Last Name : {singleStudent.last_name}
        </ListGroup.Item>
        <ListGroup.Item className="text-black border-bottom-0">
          Email: {singleStudent.email}
        </ListGroup.Item>
        <div className="main-Image">
          <ListGroup.Item className="text-black border-bottom-0 ">
            <Image src={singleStudent.avatar} alt="Student Avatar"/>
          </ListGroup.Item>
        </div>
      </ListGroup>
    </div>
  );
};

export default SingleStudent;
