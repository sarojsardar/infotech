import React from "react";
import { useParams } from "react-router-dom";
import Student from "../Data/Student";

function StudentDetail() {
  const { id } = useParams(); // Get the student id from the URL

  const student = Student.find((student) => student.id === parseInt(id));

  return (
    <div className="container">
      {student ? (
        <>
          <h2>{student.names}</h2>
          <img src={student.image} alt={student.names} style={{ width: '200px', objectFit: 'cover' }} />
          <p>Faculty: {student.Faculty}</p>
          <p>Mobile Number: {student.Mobile_no}</p>
          <p>Address: {student.Address}</p>
          <p>Gender: {student.Gender}</p>
        </>
      ) : (
        <p>Student not found.</p>
      )}
    </div>
  );
}

export default StudentDetail;
