import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
// import { AuthContext } from "./context/AuthProvider";

const AllTask = () => {
   const [userData,setUser] = useContext(AuthContext)
   // console.log("This is authData ",authData[0]);
   // console.log("This is authdata employee ",authData);
    return(
       <div className="bg-[#1C1C1C] p-5 rounded mt-5 h-48 overflow-auto">
         <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
            <h2 className="w-1/5 bg-red-600">Employee Name</h2>
            <h3 className="w-1/5 bg-red-600">New Task</h3>
            <h5 className="w-1/5 bg-red-600">Active Task</h5>
            <h5 className="w-1/5 bg-red-600">Completed Task</h5>
            <h5 className="w-1/5 bg-red-600">Failed</h5>

         </div>
         <div className="h-[80%]">
         {userData.map(function(elem,id){
          return   <div key={id} className="bg-red-400 py-2 px-4 flex justify-between rounded mb-2">
             <h2 className="w-1/5 text-lg">{elem.firstName}</h2>
             <h3 className="w-1/5 text-blue-600">{elem.taskNumbers.newTask}</h3>
             <h5 className="w-1/5 text-yellow-100">{elem.taskNumbers.active}</h5>
             <h5 className="w-1/5 text-white">{elem.taskNumbers.completed}</h5>
             <h5 className="w-1/5 text-red-700">{elem.taskNumbers.failed}</h5>
            </div>
         })} 
         </div>
       </div>
    )
}

export default AllTask