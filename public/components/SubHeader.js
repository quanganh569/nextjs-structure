import React from "react";

const SubHeader = () => {
  return (
    <>
    

      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li>
              <a href="#hero" className="nav-link scrollto active">
                <i className="bx bx-home" /> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto">
                <i className="bx bx-user" /> <span>About</span>
              </a>
            </li>
            <li>
              <a href="#facts" className="nav-link scrollto">
                <i className="bx bx-file-blank" /> <span>Project</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link scrollto">
                <i className="bx bx-book-content" /> <span>Details</span>
              </a>
            </li>
            {/* <li>
              <a href="#services" className="nav-link scrollto">
                <i className="bx bx-server" /> <span>Services</span>
              </a>
            </li> */}
            <li>
              <a href="#contact" className="nav-link scrollto">
                <i className="bx bx-envelope" /> <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* .nav-menu */}
      </header>
      {/* End Header */}
      {/* ======= Hero Section ======= */}
    </>
  );
};

export default SubHeader;
