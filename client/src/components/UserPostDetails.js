// Import dependencies
import React, { Component } from "react";
import axios from "axios";

class PostDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
    };
  }

  componentDidMount() {
    const id = window.location.href.split("/")[5];

    // call api to get post details
    axios
      .get(`http://localhost:8000/userpost/post/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success) {
          this.setState({
            post: res.data.post,
          });

          console.log(this.state.post);
        }
      });
  }
  render() {
    const { student_id, first_name, last_name, address, contact_no } =
      this.state.post;
    return (
      <div style={{ marginTop: "20px" }}>
        <h4>{student_id}</h4>

        <hr />

        <dl className="row">
          <dt className="col-sm-3">First_Name</dt>
          <dd className="col-sm-9">{`: ${first_name}`}</dd>

          <dt className="col-sm-3">Last_Name</dt>
          <dd className="col-sm-9">{`: ${last_name}`}</dd>

          <dt className="col-sm-3">Address</dt>
          <dd className="col-sm-9">{`: ${address}`}</dd>

          <dt className="col-sm-3">Contact_No</dt>
          <dd className="col-sm-9">{`: ${contact_no}`}</dd>
        </dl>
      </div>
    );
  }
}

export default PostDetails;
