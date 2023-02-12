// Import dependencies
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import LoginPage from "./pages/loginPages";
import AdminLogInPage from "./pages/AdminLogInPage";
import RegisterPage from "./pages/registerPage";
import LogOut from "./pages/logoutPage";
import AdminLogOut from "./pages/adminLogoutPage";
import UserPages from "./pages/userPages";
import AdminPages from "./pages/adminPages";
import RequireAdminAuth from "./components/RequireAdminAuth";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<LoginPage />} />
            <Route path="/admin" exact element={<AdminLogInPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/adminlogout" element={<AdminLogOut />} />
            <Route
              path="/user/*"
              element={
                <RequireAuth>
                  <UserPages />
                </RequireAuth>
              }
            />
            <Route
              path="/admins/*"
              element={
                <RequireAdminAuth>
                  <AdminPages />
                </RequireAdminAuth>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// import React from 'react';
// import axios from 'axios';

// class App extends React.Component {
//   constructor(props){
//     super(props);

//     this.state={
//       posts:[]
//     };
//   };

//   componentDidMount(){
//     this.retrievePosts();
//   }

//   retrievePosts(){
//     //console.log("pass1");
//     axios.get("http://localhost:8000/posts").then(res =>{

//         if(res.data.success){
//           this.setState({
//             posts:res.data.existingPosts
//           });

//             console.log(this.state.posts);
//         }

//     });
//   };

//   render() {
//     return (
//       <div className='container'>
//         <h1>Hello MERN</h1>
//         <table class="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Topic</th>
//               <th scope="col">Description</th>
//               <th scope="col">Post Category</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.posts.map((posts,index) =>(
//               <tr>
//                 <th scope="row">{index+1}</th>
//                 <td>
//                     <a href={`/post/${posts._id}`} style={{TextDecoration:'none'}}>
//                         {posts.topic}
//                     </a>
//                 </td>
//                 <td>{posts.description}</td>
//                 <td>{posts.postCategory}</td>
//                 <td>
//                   <a className='btn btn-warning' href='#'>
//                     <i className='fas fa-edit'></i>
//                     &nbsp;Edit
//                   </a>
//                   &nbsp;
//                   <a className='btn btn-danger' href='#'>
//                     <i className='far fa-trash-alt'></i>
//                     &nbsp;Delete
//                   </a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <button className='btn btn-success'>
//             <a href='/add' style={{TextDecoration:'none', color:'white'}}>Create New Post</a>
//         </button>
//       </div>
//     );
//   };
// };

// export default App;
