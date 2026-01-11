import React from "react";
import Taskitem from "./taskitem";

function Tasklist(props){

    return(
        <div>
        <h2>Liste des tâches :</h2>
        {props.tasks.map((task) => (
            <Taskitem 
                key={task.id}
                title={task.title}
                priority={task.priority}
                status={task.status}
            />
        ))}
        </div>
    );
}
export default Tasklist;