// Import dependencies
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import CreatePost from "../components/CreatePost";
import EditPost from "../components/EditPost";
import PostDetails from "../components/PostDetails";
import NavBar from "../components/NavBar";
import CreateAdmin from "../components/CreateAdmin";

class userPages extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/newad" element={<CreateAdmin />} />
        </Routes>
      </div>
    );
  }
}

export default userPages;
