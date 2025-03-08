import React, { useEffect, useState } from "react";

import AdminDashboard from "./AdminDashboard";
import EmployeeDashboard from "./EmployeeDashboard";
import LoginPage from "./LoginPage";
import { getLocalStorage } from "../../utils/LocalStorage";
// import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

const LoginAdmin = () =>
{

    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState([]);
    const [loggedINUserData,setLoggedInUserData] = useState('')
    
    const handleLogin = (email,password) =>{

        if(email === 'admin@example.com' && password === '123')
        {
            // setUser('admin');
            setUser('admin' );
            console.log(user);
        }
        else
        {
            // const employees = getLocalStorage();
            // setUserData(employees);
            // console.log(employees);
            const employee = userData.find((e) => email === e.email && e.password === password);
            if(employee)
            {
                setUser('employee');
                console.log(user);
                setLoggedInUserData(employee);
                localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data: employee }));
            }
        }
      };

      useEffect(() => {
        const employees = getLocalStorage();
        setUserData(employees);
        console.log("Employees:", employees);
      }, []);
    
      useEffect(() => {
        if (user) {
          console.log('User logged in:', user);
        }
      }, [user]);

    return(
        <>
           {!user ? <LoginPage handleLogin={handleLogin} /> : user == 'admin' ? <AdminDashboard  />  : user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedINUserData} /> : null }
        </>
    );
};

export default LoginAdmin