import React from "react";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="bg-secondary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to Our Learning Platform</h1>
          <p className="lead">
            Empowering you with knowledge and skills for success.
          </p>
          <a href="#courses" className="btn btn-light btn-lg">
            Explore Courses
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-chalkboard-teacher"></i> Interactive
                    Courses
                  </h5>
                  <p className="card-text">
                    Engage with interactive content and quizzes to enhance your
                    learning experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-user-graduate"></i> Expert Instructors
                  </h5>
                  <p className="card-text">
                    Learn from industry experts with years of experience and
                    knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
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
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h2 className="mb-4">Ready to Advance Your Skills?</h2>
          <a href="#contact" className="btn btn-primary btn-lg">
            Get Started
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
