// Import dependencies
import React from "react";
import { useNavigate } from "react-router-dom";
import authStore from "../stores/authStore";

const Login = () => {
  const store = authStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await store.login().then(() => {
      navigate("/user");
    });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto">
      {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p> */}
      <h1 className="h3 mb-3 font-weight-normal"> Log In</h1>
      <form className="needs-validation" noValidate onSubmit={handleLogin}>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <lable style={{ marginBottom: "15px" }}>Email</lable>
          <input
            type="text"
            className="form-control"
            name="email"
            onChange={store.updateLoginForm}
            value={store.loginForm.email}
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
            onChange={store.updateLoginForm}
            value={store.loginForm.password}
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
          Log In as <a href="/admin">Admin</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

// import React from 'react';
// import {Link, Navigate} from 'react-router-dom';
// import axios from 'axios';
// import {
//   MDBContainer,
//   MDBInput,
//   MDBCheckbox,
//   MDBBtn,
//   MDBIcon
// }
// from 'mdb-react-ui-kit';

// class Login extends React.Component {

//     constructor(props){
//         super(props);
//         this.state={
//             email:"",
//             password:"",
//             user: ""
//         }
//     }

//     handleInputChange = (e) => {
//         const {name,value} = e.target;

//         this.setState({
//         ...this.state,
//         [name]:value
//         });
//     }

//     onSubmit = async(e) => {
//         e.preventDefault();
//         const {email,password}= this.state;

//         const data = {
//             email:email,
//             password:password
//         }

//         console.log(data);

//         try{

//             await axios.post("http://localhost:8000/user/login",data, { withCredentials: true }).then((res)=>{
//                 if(res.data.success){
//                     alert('loggin success');
//                     this.setState(
//                         {
//                             email:"",
//                             password:"",
//                             user: true
//                         }
//                     )
//                 }
//             }).then(async()=>{
//                 const auth = await axios.get("http://localhost:8000/user/auth", {withCredentials: true});

//                 if (auth) {
//                     console.log('auth checked');
//                     // this.setState(
//                     //     {
//                     //         email:"",
//                     //         password:"",
//                     //         logdata:{user: 'true', error: ''}
//                     //     }
//                     // )
//                     //this.setState({logdata:{user: 'true', error: ''}});
//                 }else{
//                     console.log('auth fail');
//                     // this.setState(
//                     //     {
//                     //         email:"",
//                     //         password:"",
//                     //         logdata:{user: '', error: 'false'}
//                     //     }
//                     // )
//                     //this.setState({logdata:{user: '', error: 'false'}});
//                     //return false;
//                     //<Navigate to='/login'/>
//                 }

//                 console.log(this.state);

//             })
//         }catch(err){
//             console.log(err);
//         }
//     }

//     // chechAuth = () => {
//     //     try{
//     //         axios.get("http://localhost:8000/user/auth", {withCredentials: true});

//     //     }
//     // }

//     render() {

//         let { user, error } = this.state;

//       return (
//         //<div>hello</div>
//         <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

//             {error && <p>{error.message}</p>}
//             {user && (<Navigate to="/user" replace={true} />)}

//             <h1>LogIn</h1>

//             <MDBInput
//             wrapperClass='mb-4'
//             placeholder='Email address'
//             name='email'
//             type='email'
//             value={this.state.email}
//             onChange={this.handleInputChange}
//             />

//             <MDBInput
//             wrapperClass='mb-4'
//             placeholder='Password'
//             name='password'
//             type='password'
//             value={this.state.password}
//             onChange={this.handleInputChange}
//             />

//             {/* <div className="d-flex justify-content-between mx-3 mb-4">
//                 <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
//                 <a href="!#">Forgot password?</a>
//             </div> */}

//                 <MDBBtn className="mb-4" type='submit' onClick={this.onSubmit}>Sign in
//                 </MDBBtn>

//             <Link to='/user'>
//                 user
//             </Link>

//             <div className="text-center">
//                 <p>Not a member? <a href="/signup">Register</a></p>
//             </div>

//             </MDBContainer>
//       );
//     };
//   };

//   export default Login;
