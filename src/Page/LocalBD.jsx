import React from "react";
import Student from "../Data/Student";
import { Link } from "react-router-dom";

function LocalBD() {

  return (
    <>
      <h2>Student List</h2>

      <div className="container">
          <div className="row text-center">
           {Student.map((student) => (
            <div key={student.id} className="col-md-4 mb-4">
              <div className="card">
             
              <img
                src={student.image}
                className="card-img-top"
                alt={student.names}
                style={{ height: '200px', objectFit: 'cover' }}
              />
                <div className="card-body">
                  <h5 className="card-title">
                  <Link to={`/studentdetails/${student.id}`}>
                   {student.names} 
                   </Link>
                  </h5>
                  <p className="card-text">
                    {student.Faculty} <br />
                    {student.Mobile_no} <br />
                    {student.Address} <br />
                    {student.Gender} <br />
                  </p>
                </div>
               
              </div>
            </div>
           ))}
            
          </div>
        </div>
    </>
  );
}

export default LocalBD;
