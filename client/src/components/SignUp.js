// Import dependencies
import React from "react";
import { useNavigate } from "react-router-dom";
import authStore from "../stores/authStore";

const SignUp = () => {
  const store = authStore();
  const navigate = useNavigate();

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    // Call signup function
    await store.signup().then(() => {
      // Whwn signup success, navigate to user login page
      navigate("/");
    });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto">
      {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p> */}
      <h1 className="h3 mb-3 font-weight-normal"> Log In</h1>
      <form className="needs-validation" noValidate onSubmit={handleLogin}>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <lable style={{ marginBottom: "15px" }}>First Name</lable>
          <input
            type="text"
            className="form-control"
            name="firstName"
            onChange={store.updateSignupForm}
            value={store.signupForm.firstName}
            placeholder="Enter First Name"
            required
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <lable style={{ marginBottom: "15px" }}>Last Name</lable>
          <input
            type="text"
            className="form-control"
            name="lastName"
            onChange={store.updateSignupForm}
            value={store.signupForm.lastName}
            placeholder="Enter Last Name"
            required
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <lable style={{ marginBottom: "15px" }}>Email</lable>
          <input
            type="text"
            className="form-control"
            name="email"
            onChange={store.updateSignupForm}
            value={store.signupForm.email}
            placeholder="Enter Email"
            required
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <lable style={{ marginBottom: "15px" }}>Password</lable>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={store.updateSignupForm}
            value={store.signupForm.password}
            placeholder="Enter Password"
          />
        </div>

        <button
          className="btn btn-success"
          type="submit"
          style={{ marginTop: "15px" }}
        >
          &nbsp; Sign Up
        </button>
      </form>
      <div>
        <p>
          a member? <a href="/">Log In</a>
        </p>
      </div>
      <div>
        <p>
          Log In as <a href="/admin">Admin</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
