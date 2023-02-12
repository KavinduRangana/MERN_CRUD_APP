// Import dependencies
import React,{ Component } from 'react';
import { Routes,Route } from 'react-router-dom';
import UserHome from '../components/UserHome';
import UserPostDetails from '../components/UserPostDetails';
import UserNavBar from '../components/UserNavBar';

class userPages extends Component {
  render(){
    return(
        <div className='container'>
          <UserNavBar />
          <Routes>
            <Route path="/" exact element={<UserHome />} />
            <Route path="/post/:id" element={<UserPostDetails />} />
          </Routes>
        </div>
      
    );
  };
}

export default userPages;