import React from "react";
import { useParams } from "react-router-dom";
import Student from "../Data/Student";

function StudentDetail() {
  const { id } = useParams(); // Get the student id from the URL

  const student = Student.find((student) => student.id === parseInt(id));

  return (
    <div className="container d-flex justify-content-center">
      {student ? (
        <div className="card student-card shadow-sm p-4">
          <img 
            src={student.image} 
            alt={student.names} 
            className="card-img-top" 
            style={{ objectFit: "cover", height: "200px" }}
          />
          <div className="card-body text-center">
            <h2 className="card-title">{student.names}</h2>
            <p className="card-text"><strong>Faculty:</strong> {student.Faculty}</p>
            <p className="card-text"><strong>Mobile Number:</strong> {student.Mobile_no}</p>
            <p className="card-text"><strong>Address:</strong> {student.Address}</p>
            <p className="card-text"><strong>Gender:</strong> {student.Gender}</p>
          </div>
        </div>
      ) : (
        <p>Student not found.</p>
      )}
    </div>
  );
}

export default StudentDetail;
