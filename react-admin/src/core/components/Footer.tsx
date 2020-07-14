import React from "react";

const Footer = (): JSX.Element => {
  return (
    <footer className="py-4 bg-light mt-auto">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between small">
          <div className="text-muted">Copyright &copy; Your Website 2019</div>
          <div>
            <a href="# ">Privacy Policy</a>
            &middot;
            <a href="# ">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;