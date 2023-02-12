// Import dependencies
import React, { Component } from "react";
import axios from "axios";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student_id: "",
      first_name: "",
      last_name: "",
      address: "",
      contact_no: "",
    };
  }

  // Handle inputs
  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  // Handle submit
  onSubmit = (e) => {
    e.preventDefault();
    const id = window.location.href.split("/")[5];
    const { student_id, first_name, last_name, address, contact_no } =
      this.state;

    const data = {
      student_id: student_id,
      first_name: first_name,
      last_name: last_name,
      address: address,
      contact_no: contact_no,
    };

    console.log(data);

    axios
      .put(`http://localhost:8000/post/post/update/${id}`, data, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success) {
          alert("Post Updated Successfully");
          this.setState({
            student_id: "",
            first_name: "",
            last_name: "",
            address: "",
            contact_no: "",
          });
        }
      });
  };

  componentDidMount() {
    const id = window.location.href.split("/")[5];
    console.log(id);

    // Retrieve post
    axios
      .get(`http://localhost:8000/post/post/${id}`, { withCredentials: true })
      .then((res) => {
        if (res.data.success) {
          this.setState({
            student_id: res.data.post.student_id,
            first_name: res.data.post.first_name,
            last_name: res.data.post.last_name,
            address: res.data.post.address,
            contact_no: res.data.post.contact_no,
          });

          //console.log(this.state.post);
        }
      });
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal"> Edit Post</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <lable style={{ marginBottom: "15px" }}>Student_ID</lable>
            <input
              type="text"
              className="form-control"
              name="student_id"
              placeholder="Enter student_id"
              value={this.state.student_id}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <lable style={{ marginBottom: "15px" }}>First_Name</lable>
            <input
              type="text"
              className="form-control"
              name="first_name"
              placeholder="Enter first_name"
              value={this.state.first_name}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <lable style={{ marginBottom: "15px" }}>Last_Name</lable>
            <input
              type="text"
              className="form-control"
              name="last_name"
              placeholder="Enter last_name"
              value={this.state.last_name}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <lable style={{ marginBottom: "15px" }}>Last_Name</lable>
            <input
              type="text"
              className="form-control"
              name="address"
              placeholder="Enter address"
              value={this.state.address}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <lable style={{ marginBottom: "15px" }}>Contact_No</lable>
            <input
              type="text"
              className="form-control"
              name="contact_no"
              placeholder="Enter contact_no"
              value={this.state.contact_no}
              onChange={this.handleInputChange}
            />
          </div>

          <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>
            &nbsp; update
          </button>
        </form>
      </div>
    );
  }
}

export default EditPost;
