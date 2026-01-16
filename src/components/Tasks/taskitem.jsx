import React from 'react';

function TaskItem({ task }) {
  return(
    <tr>
      <td>{task.titre}</td>
      <td>{task.description}</td>
      <td>{task.statut}</td>
      <td>{task.priorite}</td>
      <td>{task.dateLimite}</td>
    </tr>

  );
}

export default TaskItem;