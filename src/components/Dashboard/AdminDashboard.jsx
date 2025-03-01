import React from "react";
import Header from "../other/Header";
import AllTask from "../other/AllTask";
import "./Style.css";

const AdminDashboard = (props) => {
    return(
        <div className="h-screen w-full p-7 bg-black">
            <Header changeUser={props.changeUser} />
            <div className="p-5 h-2/4 bg-[#1C1C1C] mt-7 rounded">
            <form className="flex flex-wrap w-full items-start justify-between">
                <div className="w-1/2">
                <div>
                    <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                    <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder-gray text-white " type="text" placeholder="Make a UI design" />
                </div>
               
                {/* <div>
                    <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                    <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-gray-400 appearance-none" type="date" />
                </div> */}
                <div id="adminDate">
                    <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                    <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-gray-400 appearance-none" type="date" />
                </div>
             


                <div>
                    <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
                    <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder-gray text-white" type="text" placeholder="employee name" />
                </div>
                <div>
                    <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                    <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder-gray text-white" type="text" placeholder="Category" />
                </div>
                </div>


                <div className="w-2/5 flex flex-col items-start">
                    <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                    <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 text-gray-400" name="" id="">design,dev,etc</textarea>
                    <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
                </div>
               
            </form>
            </div>
            <AllTask />
        </div>
    )
}

export default AdminDashboard