import React, { useEffect, useState } from "react";
// import newImage from '../img/NewImage.jpg'; 
// import newImage from '../img/NewImage.jpg';
import newImage from "../../img/NewImage.jpg";
import "./Home.css";
import { Link } from 'react-router-dom';


const Home = () => {

    // State to hold the current year
  const [currentYear, setCurrentYear] = useState('');

  // useEffect to set the year when the component mounts
  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);

    return(
        <>
           <div className="container">
            

            <div className="right-content" id="home">
            <nav>
                <h1>EMS</h1>
                <ul>
                    {/* <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="/login">Login</a></li> */}
                    <li><Link to="#home">Home</Link></li>
                    <li><Link to="#about">About</Link></li>
                    <li><Link to="#service">Service</Link></li>
                    <li><Link to="#contact">Contact</Link></li>
                    <li><Link to="/loginadmin">Login</Link></li>
                </ul>
            </nav>
            <img src={newImage} alt="new"/>
      <p>A powerful and efficient system to manage your workforce, track attendance, and streamline payroll in one place.</p>
      <button>Get Started</button>
    </div>
  
           


           <div className="right-content" id="about">
           
           <img src={newImage} alt="new"/>
          <p>Our Employee Management System is designed to help organizations manage their employees efficiently. From hiring to retirement, we streamline HR processes with automation and intelligent tools.</p>
          <div className="about-box">
            <div className="about-box1">
                <button>Our Mission</button>
                <p className="hidden-text1">To simplify workforce management and enhance organizational productivity through a modern and efficient employee management solution.</p>
            </div>

            <div className="about-box2">  
            <button>Our Vision</button>
            <p className="hidden-text2">To become the go-to platform for businesses seeking a seamless and smart way to manage employees.</p>
            </div>
          </div>
        </div>

        
        <div className="right-content" id="service">
          <h1>Explore our powerful features for employee     
            management</h1>
            <div id="box"></div>
            <div className="box">
                <div className="box1">
                    <h3>Employee Management</h3>
                    <img src={newImage} alt="new"/>
                    <h4>Store employee records</h4>
                    <button>Get Started</button>
                </div>

                <div className="box1">
                    <h3>Attendance Tracking</h3>
                    <img src={newImage} alt="new"/>
                    <h4>Track attendance & leave</h4>
                    <button>Get Started</button>
                </div>

                <div className="box1">
                    <h3>Payroll System</h3>
                    <img src={newImage} alt="new"/>
                    <h4>Process salaries easily</h4>
                    <button>Get Started</button>
                </div>

                <div className="box1">
                    <h3>Performance Reports</h3>
                    <img src={newImage} alt="new"/>
                    <h4>Generate reports  </h4>
                    <button>Get Started</button>
                </div>

            </div>
        </div>


        <div className="right-content" id="contact">
          <h1>Contact</h1>
          <label htmlFor="name">Name</label>
      <input type="text" id="name" required />
      
      <label htmlFor="email">Email</label>
      <input type="email" id="email" required />
      
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message"></textarea>
      
      <button type="submit">Submit</button>
        </div>

        <footer>
      <h1>Employee Management System</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <p>&copy; {currentYear} EMP All rights reserved.</p>
    </footer>
      </div>
        </>
    )
}

export default Home