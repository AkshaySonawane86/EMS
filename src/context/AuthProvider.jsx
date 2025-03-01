
import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);  // Initialize with empty array

  useEffect(() => {
    // Retrieve employees data from localStorage
    setLocalStorage()
    const employees = getLocalStorage();
    // console.log("Fetched Employees: ", employees);  // Check if data is fetched properly

    // localStorage.clear()
    // Set the retrieved employees data to the state
    setUserData(employees);
  }, []);  // Empty dependency array ensures this runs only once when the component mounts

  return (
    <AuthContext.Provider value={[userData,setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;


// import React, { createContext, useEffect, useState } from "react";
// import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
// export const AuthContext = createContext()

// const AuthProvider = ({children}) => {

//     const [userData,setUserData] = useState([])
//     const data = getLocalStorage()
//     console.log(data);
//     // console.log(data.employees);
//     // setUserData(getLocalStorage()) Not use this

//     useEffect(() => {
//         const employees = getLocalStorage()
//         console.log(employees);
//         // setUserData({employees,admin})
//         setUserData(employees)
        
//         // setLocalStorage()
//     },[])

//     // useEffect(() =>{
        
//     // })
//     return(
//         <div>
//             <AuthContext.Provider value={userData}>
//             {children}
//             </AuthContext.Provider>
//         </div>
//     )
// }

// export default AuthProvider