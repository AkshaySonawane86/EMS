import React from "react";



const Home = () => {
    return(
        <>
           <div className="container">
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div class="right-content" id="home">
      <img src="img/new-year-background-736885_1280.jpg" alt="image"/>
      <p>A powerful and efficient system to manage your workforce, track attendance, and streamline payroll in one place.</p>
      <button>Get Started</button>
    </div>
  
           


           <div class="right-content" id="about">
           
           <img src="img/new-year-background-736885_1280.jpg" alt="image" />
          <p>Our Employee Management System is designed to help organizations manage their employees efficiently. From hiring to retirement, we streamline HR processes with automation and intelligent tools.</p>
          <div class="about-box">
            <div class="about-box1">
                <button>Our Mission</button>
                <p class="hidden-text1">To simplify workforce management and enhance organizational productivity through a modern and efficient employee management solution.</p>
            </div>

            <div class="about-box2">  
            <button>Our Vision</button>
            <p class="hidden-text2">To become the go-to platform for businesses seeking a seamless and smart way to manage employees.</p>
            </div>
          </div>
        </div>

        
        <div class="right-content" id="service">
          <h1>Explore our powerful features for employee     
            management</h1>
            <div id="box"></div>
            <div class="box">
                <div class="box1">
                    <h3>Employee Management</h3>
                    <img src="img/new-year-background-736885_1280.jpg" alt="Employee"/>
                    <h4>Store employee records</h4>
                    <button>Get Started</button>
                </div>

                <div class="box1">
                    <h3>Attendance Tracking</h3>
                    <img src="img/new-year-background-736885_1280.jpg" alt="Employee"/>
                    <h4>Track attendance & leave</h4>
                    <button>Get Started</button>
                </div>

                <div class="box1">
                    <h3>Payroll System</h3>
                    <img src="img/new-year-background-736885_1280.jpg" alt="Employee"/>
                    <h4>Process salaries easily</h4>
                    <button>Get Started</button>
                </div>

                <div class="box1">
                    <h3>Performance Reports</h3>
                    <img src="img/new-year-background-736885_1280.jpg" alt="Employee"/>
                    <h4>Generate reports  </h4>
                    <button>Get Started</button>
                </div>

            </div>
        </div>


        <div class="right-content" id="contact">
          <h1>Contact</h1>
          <div class="box"></div>
          <label for="name">Name</label>
          <input type="text" required />
          <label for="email">Email</label>
          <input type="email" required />
          <label for="message">Message</label>
          <textarea name="message"></textarea>
          <button>Submit</button>
        </div>
      </div>
        </>
    )
}

export default Home