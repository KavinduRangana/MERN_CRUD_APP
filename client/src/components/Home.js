// Import dependencies
import React from "react";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  // Post retrieve
  retrievePosts() {
    //console.log("pass1");
    axios
      .get("http://localhost:8000/post/posts", { withCredentials: true })
      .then((res) => {
        if (res.data.success) {
          this.setState({
            posts: res.data.existingPosts,
          });

          console.log(this.state.posts);
        }
      });
  }

  // Post delete
  onDelete = (id) => {
    axios
      .delete(`http://localhost:8000/post/post/delete/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        alert("Delete Successfully");
        this.retrievePosts();
      });
  };

  // find posts using searchkey
  filterData(posts, searchKey) {
    const result = posts.filter(
      (post) =>
        post.student_id.toLowerCase().includes(searchKey) ||
        post.first_name.toLowerCase().includes(searchKey) ||
        post.last_name.toLowerCase().includes(searchKey) ||
        post.address.toLowerCase().includes(searchKey) ||
        post.contact_no.toLowerCase().includes(searchKey)
    );

    this.setState({ posts: result });
  }

  // Search area function
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios
      .get("http://localhost:8000/post/posts", { withCredentials: true })
      .then((res) => {
        if (res.data.success) {
          this.filterData(res.data.existingPosts, searchKey);
        }
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>All Posts</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuary"
              onChange={this.handleSearchArea}
            ></input>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Student_ID</th>
              <th scope="col">First_Name</th>
              <th scope="col">Last_Name</th>
              <th scope="col">Address</th>
              <th scope="col">Contact_No</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/admins/post/${posts._id}`}
                    style={{ TextDecoration: "none" }}
                  >
                    {posts.student_id}
                  </a>
                </td>
                <td>{posts.first_name}</td>
                <td>{posts.last_name}</td>
                <td>{posts.address}</td>
                <td>{posts.contact_no}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`/admins/edit/${posts._id}`}
                  >
                    <i className="fas fa-edit"></i>
                    &nbsp;Edit
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(posts._id)}
                  >
                    <i className="far fa-trash-alt"></i>
                    &nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-success">
          <a
            href="/admins/add"
            style={{ TextDecoration: "none", color: "white" }}
          >
            Create New Post
          </a>
        </button>
      </div>
    );
  }
}

export default Home;
