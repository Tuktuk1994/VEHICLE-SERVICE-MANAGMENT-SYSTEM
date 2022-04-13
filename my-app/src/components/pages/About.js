import React from 'react';
import NavBar from '../layout/Navbar'
const About = () => {

  return (
    <div>
    
    <NavBar/>
    <div className="container">
      <div className="py-4" className="text-black blocktext">
        <h2>About Us</h2>
        <br></br>
        <p>
          <strong>
            Vehicle Service Management System aims to be the best of both worlds
            - Reliable and Cost-effective Vehicle Services.
          </strong>
        </p>
        <p>
          Group Name:- Group:113 
          Title - Vehicle Servicing
          Management System
        </p>
        
        <p>Member 1 - Jyotesh Pateriya(2022)</p>
        <p>Member 2 - Akshay Dalvi(2022) </p>
        <p>Member 2 - Shreyansh Jain(2022) </p>
      </div>
    </div>
    </div>
  );
};

export default About;
