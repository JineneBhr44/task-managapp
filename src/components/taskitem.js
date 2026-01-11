import React from "react";
function Taskitem({title, priority, status}){
    return (
        <div>
            <h3>
                { title }
            </h3>
            <p>
                Priorité : {priority}
            </p>
            <p>
                statut : {status}
            </p>
        </div>
    );
}
export default Taskitem;