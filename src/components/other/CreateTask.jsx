import React, { useContext, useState } from "react";
import Header from "./Header";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

    const [taskTitle,setTaskTitle] = useState('')
    const [taskDescription,setTaskDescription] = useState('')
    const [taskDate,setTaskDate] = useState('')
    const [asignTo,setAsignTo] = useState('')
    const [category,setCategory] = useState('')
    // const [task,setTask] = useState('')
    const [newTask,setNewTask] = useState({})
    const [userData, setUserData] = useContext(AuthContext)

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("task created");
        // console.log(taskDate,taskTitle,taskDescription);
        // setTaskTitle('')
        // setAsignTo('')
        // setCategory('')
        // setTaskDate('')
        // setTaskDescription('')
        // setTask({taskTitle,taskDescription,taskDate,category,active:false,newTask: true,failed: false,completed: false})
        // console.log(task);
        // const data = localStorage.getItem('employees')
        // console.log(data);
        // const data= JSON.parse(localStorage.getItem('employees'))
        // console.log(data);
        // const data = userData.employees
        const data = userData
        // console.log(data);
        data.forEach(function(elem){
         //data   // console.log("Hello");
            // console.log(elem.firstName);
            if(asignTo==elem.firstName)
            {
                // console.log("Yahi hai vo");
                // console.log(elem);
                elem.tasks.push(newTask);
                // localStorage.setItem('employees',JSON.stringify(data))
                elem.taskCounts.newTask=elem.taskCounts.newTask+1
            }
        })
        setUserData(data)
        // console.log(data);
                setTaskTitle('')
                setCategory('')
                setAsignTo('')
                setTaskDate('')
                setTaskDescription('')
    }
    return(
        <div className="h-screen w-full p-7 bg-black">
        <Header />
        <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
        <form onSubmit={(e) =>{submitHandler(e)}} className="flex flex-wrap w-full items-start justify-between">
            <div className="w-1/2">
            <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 text-gray-400 mb-4 " value={taskTitle} onChange={(e) => {setTaskTitle(e.target.value)}} type="text" placeholder="Make a UI design" />
            </div>
           
            <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-gray-400" value={taskDate} onChange={(e) => {setTaskDate(e.target.value)}} type="date" />
            </div>
            <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
                <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-gray-400" value={asignTo} onChange={(e) => {setAsignTo(e.target.value)}} type="text" placeholder="employee name" />
            </div>
            <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-gray-400" value={category} onChange={(e) => {setCategory(e.target.value)}} type="text" placeholder="Category" />
            </div>
            </div>


            <div className="w-2/5 flex flex-col items-start">
                <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 text-gray-400" value={taskDescription} onChange={(e) =>{setTaskDescription(e.target.value)}} name="" id="">design,dev.etc</textarea>
                
            </div>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
        </form>
        </div>
    </div>
    )
}

export default CreateTask