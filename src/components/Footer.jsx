import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-light text-center text-lg-start mt-auto">
        <div className="text-center p-3 bg-dark text-light">
          &copy; {new Date().getFullYear()} InfoTech Education. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
