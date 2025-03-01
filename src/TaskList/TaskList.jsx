import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
      // console.log(data);
    return(
        <div id="tasklist" className="h-[55%] w-full mt-10 py-5 flex items-center justify-start gap-5 flex-nowrap overflow-auto">
          
          {data.tasks.map((elem,idx) => {
            if(elem.active){
              return <AcceptTask key={idx} data={elem}/>
            }
            if(elem.newTask)
            {
              return <NewTask key={idx} data={elem}/>
            }
            if(elem.completed)
            {
              return <CompleteTask key={idx} data={elem} />
            }
            if(elem.failed)
            {
              return <FailedTask key={idx} data={elem}/>
            }
          })}
          

          

          

          

          {/* <div className="h-full w-[300px] bg-yellow-400 rounded-xl flex-shrink-0 p-5">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
                <h4 className="text-sm">20 feb 2024</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">make a youtube video</h2>
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore asperiores facilis magnam quisquam doloribus.</p>
          </div> */}

          

        </div>
    )
}

export default TaskList