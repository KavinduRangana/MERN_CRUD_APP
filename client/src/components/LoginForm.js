// Import dependencies
import React from "react";

export default function LoginForm() {
  return (
    <div className="col-md-8 mt-4 mx-auto">
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
        {errMsg}
      </p>
      <h1 className="h3 mb-3 font-weight-normal"> Log In</h1>
      <form className="needs-validation" noValidate onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <lable style={{ marginBottom: "15px" }}>Email</lable>
          <input
            type="text"
            className="form-control"
            id="email"
            ref={userRef}
            onChange={(e) => setUser(e.target.value)}
            value={user}
            placeholder="Enter Email"
            required
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <lable style={{ marginBottom: "15px" }}>Password</lable>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
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
    </div>
  );
}
