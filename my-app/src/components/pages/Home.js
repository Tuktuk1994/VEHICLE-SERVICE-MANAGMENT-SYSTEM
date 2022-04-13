import React from 'react';
import '../../App.css';
import Navbar from '../layout/Navbar';
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="py-4" className="text">
          <p>
            <h2 className="py-4">Vehicle Service Management System</h2>
          </p>
       
        </div>
        
      </div>
      < img src="/images/homepage.gif" className="img-responsive" alt="" id="home"></img>
    </div>
  );
};

export default Home;
