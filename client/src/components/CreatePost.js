// Import dependencies
import React, { Component } from "react";
import axios from "axios";

class CreatePost extends Component {
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

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  write = () => {
    const a = 90;
    return a;
  };

  onSubmit = (e) => {
    e.preventDefault();
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
      .post("http://localhost:8000/post/post/save", data, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success) {
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

  // findId = () => {

  //   return new Promise((resolve) => {
  //     axios.get(`http://localhost:8000/post/max`).then((res)=>{
  //   //axios.get(`http://localhost:8000/post/63c63452838ffbbfe1d97424`).then((res)=>{
  //       if(res.data.success){
  //         //num= res.data.post[0].student_id + 1;
  //         const num = res.data.post[0].student_id + 1;

  //           // this.setState({
  //           //   student_id: num
  //           //   // first_name:res.data.post.first_name,
  //           //   // last_name:res.data.post.last_name,
  //           //   // address:res.data.post.address,
  //           //   // contact_no:res.data.post.contact_no
  //           // });
  //           //
  //           //return num;
  //           resolve (num);
  //       }

  //   });

  //   })

  //   //  axios.get(`http://localhost:8000/post/max`).then((res)=>{
  //   // //axios.get(`http://localhost:8000/post/63c63452838ffbbfe1d97424`).then((res)=>{
  //   //     if(res.data.success){
  //   //         num = res.data.post[0].student_id + 1;

  //   //         // this.setState({
  //   //         //   student_id: num
  //   //         //   // first_name:res.data.post.first_name,
  //   //         //   // last_name:res.data.post.last_name,
  //   //         //   // address:res.data.post.address,
  //   //         //   // contact_no:res.data.post.contact_no
  //   //         // });
  //   //         console.log('num');
  //   //         console.log(num);
  //   //         //return num;
  //   //         //return 50;
  //   //     }

  //   // });
  //   // return num;

  // }

  // componentDidMount(){
  //   //const id = this.props.match.params.id;

  //   //console.log("pass1");
  //   // const user_id = this.props.match.params.id;
  //   // console.log(user_id);
  //   const id = window.location.href.split('/')[5]
  //   console.log(id);

  //   axios.get(`http://localhost:8000/post/max`).then((res)=>{
  //   //axios.get(`http://localhost:8000/post/63c63452838ffbbfe1d97424`).then((res)=>{
  //       if(res.data.success){
  //           const num = res.data.post[0].student_id + 1;

  //           this.setState({
  //             student_id: num
  //             // first_name:res.data.post.first_name,
  //             // last_name:res.data.post.last_name,
  //             // address:res.data.post.address,
  //             // contact_no:res.data.post.contact_no
  //           });

  //           console.log(num);
  //           return num;
  //       }
  //   });
  // }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal"> Create New Post</h1>
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
            <lable style={{ marginBottom: "15px" }}>Address</lable>
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
            &nbsp; save
          </button>
        </form>
      </div>
    );
  }
}

export default CreatePost;
