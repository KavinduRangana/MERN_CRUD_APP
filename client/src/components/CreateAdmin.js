// Import dependencies
import React from "react";
import { useNavigate } from "react-router-dom";
import authStore from "../stores/authStore";

const CreateAdmin = () => {
  const store = authStore();
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    await store.adminSignup().then(() => {
      //navigate('/admins');
    });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto">
      {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p> */}
      <h1 className="h3 mb-3 font-weight-normal"> Create New Admin</h1>
      <form className="needs-validation" noValidate onSubmit={handleCreate}>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <lable style={{ marginBottom: "15px" }}>First Name</lable>
          <input
            type="text"
            className="form-control"
            name="firstName"
            onChange={store.updateAdminCreateForm}
            value={store.AdminCreateForm.firstName}
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
            onChange={store.updateAdminCreateForm}
            value={store.AdminCreateForm.lastName}
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
            onChange={store.updateAdminCreateForm}
            value={store.AdminCreateForm.email}
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
            onChange={store.updateAdminCreateForm}
            value={store.AdminCreateForm.password}
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
    </div>
  );
};

export default CreateAdmin;
