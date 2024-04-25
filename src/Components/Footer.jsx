import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">
          © {new Date().getFullYear()}{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            NK
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;