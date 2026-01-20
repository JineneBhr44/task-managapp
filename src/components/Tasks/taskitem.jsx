import React from 'react';
import"./tasks.css";

function TaskItem({ task }) {

  const getStatutClass=(statut)=>{
    switch(statut.toLowerCase().replace(' ', '-')){
      case "a-faire" : return "statut-a-faire";
      case "en-cours" : return "statut-en-cours";
      case "termine" : return "statut-termine";
      default: return ;
    }
  };
  const getPrioriteClass =(priorite)=>{
    switch(priorite.toLowerCase()){
      case "haute": return "priorite-haute";
      case "moyenne":return "priorite-moyenne";
      case "basse":return "priorite-basse";
      default: return;
    }
  };
  
  
  return(
    <tr>
      <td>{task.titre}</td>
      <td>{task.description}</td>
      <td>
        <span className={`statut-badge ${getStatutClass(task.statut)}`}>
           {task.statut}
        </span>
      </td>
      <td>
        <span className={`priorite-badge ${getPrioriteClass(task.priorite)}`}>
          {task.priorite}
        </span>
      </td>
      <td>{task.dateLimite}</td>
      <td className='supp-modf'>
        <button className='supp'>Supprimer</button>
        <button className='modf'>Modifier</button>
      </td>
    </tr>

  );
}

export default TaskItem;