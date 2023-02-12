// Import dependencies
import React from "react";
import { useNavigate } from "react-router-dom";
import authStore from "../stores/authStore";

const Login = () => {
  const store = authStore();
  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    await store.AdminLogin().then(() => {
      navigate("/admins");
    });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto">
      {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p> */}
      <h1 className="h3 mb-3 font-weight-normal">Admin Log In</h1>
      <form className="needs-validation" noValidate onSubmit={handleAdminLogin}>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <lable style={{ marginBottom: "15px" }}>Email</lable>
          <input
            type="text"
            className="form-control"
            name="email"
            onChange={store.updateAdminLoginForm}
            value={store.adminLoginForm.email}
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
            onChange={store.updateAdminLoginForm}
            value={store.adminLoginForm.password}
            placeholder="Enter Password"
          />
        </div>

        <button
          className="btn btn-success"
          type="submit"
          style={{ marginTop: "15px" }}
        >
          &nbsp; Log In
        </button>
      </form>
      <div>
        <p>
          Not a member? <a href="/signup">Register</a>
        </p>
      </div>
      <div>
        <p>
          Log In as <a href="/">User</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
