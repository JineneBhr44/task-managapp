import React from "react";
import Taskitem from "./taskitem";

function Tasklist(){

    return(
        <div>
        <h2>Liste des tâches :</h2>
        <Taskitem />
        <Taskitem />
        </div>
    );
}
export default Tasklist;