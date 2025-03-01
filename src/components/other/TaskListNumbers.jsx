import React from "react";

const TaskListNumbers = ({data}) => {
    // console.log(data);
    return(
        <div className="flex screen justify-between gap-5 mt-10">
           <div className="w-[45%] bg-red-400 py-5 px-9 rounded-xl">
            <h2 className="text-3xl font-semibold">{data.taskNumbers.newTask}</h2>
            <h3 className="text-3xl font-semibold">New Task</h3>
           </div>

           <div className="w-[45%] bg-blue-400 py-5 px-9 rounded-xl">
            <h2 className="text-3xl font-semibold">{data.taskNumbers.completed}</h2>
            <h3 className="text-3xl font-semibold">New Task</h3>
           </div>

           <div className="w-[45%] bg-green-400 py-5 px-9 rounded-xl">
            <h2 className="text-3xl font-semibold">{data.taskNumbers.active}</h2> 
            {/* taskCounts */}
            <h3 className="text-3xl font-semibold">New Task</h3>
           </div>

           <div className="w-[45%] bg-yellow-400 py-5 px-9 rounded-xl">
            <h2 className="text-3xl font-semibold">{data.taskNumbers.failed}</h2>
            <h3 className="text-3xl font-semibold">New Task</h3>
           </div>
        </div>
    )
}

export default TaskListNumbers