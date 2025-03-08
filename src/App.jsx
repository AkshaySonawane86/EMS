// import React, { useContext, useEffect, useState } from "react";
// import Login from "./components/Auth/Login";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import { AuthContext } from "./context/AuthProvider";
import React from "react";
import Home from "./components/Dashboard/Home";
// import LoginPage from "./components/Dashboard/LoginPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginAdmin from "./components/Dashboard/LoginAdmin";


const App = () => {

  //  const [user,setUser] = useState(null)
  //  const [loggedINUserData,setLoggedInUserData] = useState('') //second wriete
  // //  const authData = useContext(AuthContext)
  // const [userData,setUserData] = useContext(AuthContext)
  // //  console.log(authData.employees);
   
  //  // useEffect(() => {
  //  //    if(authData)
  //  //    {
  //  //       const loggedInuser = localStorage.getItem("logged InUser")
  //  //       if(loggedInuser)
  //  //       {
  //  //          setUser(loggedInuser.role)
  //  //       }
  //  //    }
  //  // },[authData])

  // //  localStorage.clear()
  //  useEffect(() => {
  //   const loggedInUser = localStorage.getItem('loggedInUser',JSON.stringify({role: 'employee',data: 'employee'}))
  //   // console.log(loggedInUser);
  //   // localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: 'employee' }));
  //   // const loggedInUser = localStorage.getItem('loggedInUser');
  //   if(loggedInUser)
  //   {
  //     // console.log("user logged hai");
  //     const userData = JSON.parse(loggedInUser)
  //     // console.log(userData);
  //     // console.log("UserData data is ",userData.data);
  //     setUser(userData.role)
  //     console.log("serUser ",user);
  //     setLoggedInUserData(userData.data)
  //     console.log("setLoggedInUserData ",loggedInUser);
  //     // console.log('User data from localStorage:', userData);
  //   }
  //  },[])
  //  const handleLogin = (email, password) => {
  //     // Check if login credentials match for admin


  //     //  console.log(email);
  //     //  console.log(password);

  //     //  console.log(authData[1].email);
  //     //  console.log(authData[1].password);
       

  //     if (email === 'admin@example.com' && password === '123') {
  //       // console.log("This is Admin");
  //       setUser({ role: 'admin' });
  //       localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
  //       console.log("This is Admin");
  //     }
  //     // Check if authData and authData.employees are defined
  //     else if (userData) {
  //           //  authData
  //       // console.log("This is authData ",authData[0]);
  //       // console.log("This is authData employeesdata ",authData.employees);
  //       // console.log("This is authData employeesdata ",authData.employee);
  //       // console.log(authData.email);
  //       const employee = userData.find((e) => email === e.email && e.password === password);
  //                     //  authData
  //       // console.log("THis is employee",employee);
  //       if (employee) {
  //         // console.log("Data fffffffffffffffffff");
  //         setUser({ role: 'employee' });
  //         // setUser('employee')
  //         // console.log(user);
  //         setLoggedInUserData(employee);
  //         // console.log("This is new employee eeeeeeeee data ",employee);
  //         localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data: employee }));
  //       } else {
  //         alert('Invalid credentials');
  //       }
  //     } else {
  //       alert('Invalid credentials');
  //     }
  //     // console.log(user);
  //   };
    

  //  const data = useContext(AuthContext)
  // //  console.log(data);
   return(
    <>
      {/* <Home/> */}
      <Router>
      <Routes>
        {/* <Route exact path="/" element={Home} />  */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/loginPage" element={LoginPage} />  */}
        {/* <Route path="/loginPage" element={<LoginPage />} /> */}
        {/* <Route path="/LoginAdmin" element={<LoginAdmin />} /> */}
        <Route path="/loginadmin" element={<LoginAdmin />} />
        </Routes>
    </Router>
       {/* {!user ? <Login handleLogin={handleLogin} /> : ''} */}
       {/* {!user ? <Login handleLogin={handleLogin} /> : user == 'admin' ? <AdminDashboard changeUser={setUser} />  : user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedINUserData}/> : null } */}
       {/* {user == 'admin' ? <AdminDashboard /> : user == 'employee' ? <EmployeeDashboard data={loggedINUserData}/> : null}  */}
       {/* <Login /> */}
       {/* <EmployeeDashboard /> */}
       {/* <EmployeeDashboard data={loggedINUserData}/> */}
       {/* <AdminDashboard /> */}
    </>
   )
}

export default App