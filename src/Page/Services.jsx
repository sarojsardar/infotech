import React from 'react';

function Services() {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img 
                  src="https://picsum.photos/300/200?random=1" 
                  className="card-img-top" 
                  alt="Interactive Courses" 
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-chalkboard-teacher"></i> Interactive Courses
                  </h5>
                  <p className="card-text">
                    Engage with interactive content and quizzes to enhance your learning experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img 
                  src="https://picsum.photos/300/200?random=2" 
                  className="card-img-top" 
                  alt="Expert Instructors" 
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-user-graduate"></i> Expert Instructors
                  </h5>
                  <p className="card-text">
                    Learn from industry experts with years of experience and knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img 
                  src="https://picsum.photos/300/200?random=3" 
                  className="card-img-top" 
                  alt="Flexible Learning" 
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-calendar-alt"></i> Flexible Learning
                  </h5>
                  <p className="card-text">
                    Access materials anytime, anywhere, at your own pace.
                  </p>
                </div>
              </div>
            </div>
            {/* Repeat for additional cards */}
            {/* Example of additional card */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img 
                  src="https://picsum.photos/300/200?random=4" 
                  className="card-img-top" 
                  alt="Another Feature" 
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-star"></i> Another Feature
                  </h5>
                  <p className="card-text">
                    Description of another feature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
