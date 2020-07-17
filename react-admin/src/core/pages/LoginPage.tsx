import React, { useEffect } from "react";
import userManager from "../helpers/userManager";

const LoginPage = (): JSX.Element => {
  useEffect(() => {
    document.getElementById("body")?.setAttribute("class","bg-primary");
  });
  const login = () => {
    // pass the current path to redirect to the correct page after successfull login
    userManager.signinRedirect();
  };

  return (
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                  <div className="card-header">
                    <h3 className="text-center font-weight-light my-4">
                      Login
                    </h3>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label className="small mb-1">Email</label>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          type="email"
                          placeholder="Enter email address"
                        />
                      </div>
                      <div className="form-group">
                        <label className="small mb-1">Password</label>
                        <input
                          className="form-control py-4"
                          id="inputPassword"
                          type="password"
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="rememberPasswordCheck"
                            type="checkbox"
                          />
                          <label className="custom-control-label">
                            Remember password
                          </label>
                        </div>
                      </div>
                      <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                        <a className="small" href="password.html">
                          Forgot Password?
                        </a>
                        <a className="btn btn-primary" onClick={()=>login()}>
                          Login
                        </a>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center">
                    <div className="small">
                      <a href="register.html">Need an account? Sign up!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div id="layoutAuthentication_footer">
        <footer className="py-4 bg-light mt-auto">
          <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-between small">
              <div className="text-muted">
                Copyright &copy; Your Website 2019
              </div>
              <div>
                <a href="# ">Privacy Policy</a>
                &middot;
                <a href="# ">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
