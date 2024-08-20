import React from 'react'

function About() {
  return (
   <>
       <div className="container py-5">
      <div className="row">
        {/* About Section Header */}
        <div className="col-md-12 text-center mb-5">
          <h1 className="display-4">About Us</h1>
          <p className="lead">Learn more about our mission and team.</p>
        </div>
      </div>

      <div className="row">
        {/* Mission Statement */}
        <div className="col-md-12 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h3 className="card-title">Our Mission</h3>
              <p className="card-text">
                Our mission is to provide high-quality educational resources and support to learners worldwide. We are committed to fostering a love for learning and empowering individuals with the skills they need to succeed.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="col-md-12 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h3 className="card-title">Meet the Team</h3>
              <p className="card-text">
                Our team consists of dedicated professionals with extensive experience in education and technology. We are passionate about helping learners achieve their goals and continuously improving our platform.
              </p>
              <ul className="list-unstyled">
                <li>Jane Doe - CEO</li>
                <li>John Smith - CTO</li>
                <li>Emily Johnson - Lead Educator</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="row">
        <div className="col-md-12 text-center mt-5">
          <h2>Get in Touch</h2>
          <p>
            Have questions or want to learn more? Feel free to <a href="#contact" className="btn btn-primary">Contact Us</a>.
          </p>
        </div>
      </div>
    </div>
   </>
  )
}

export default About
