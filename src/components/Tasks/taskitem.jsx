import React,{useState} from 'react';
import"./tasks.css";
import "./editing.css";

function TaskItem({ task,onDelete, onEdit, onSave, onCancel, isEditing}) {
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
  
  const [editedTask, setEditedTask] = useState(task);

  const handleChange = (e) =>{
    const{name,value}=e.target;
    setEditedTask(prev => ({ ...prev, [name]: value}));
  };
  
  return(
    <tr className={isEditing ? 'is-editing' : ''}>
      <td>
        {isEditing ? (
          <input name="titre" value={editedTask.titre} onChange={handleChange}/>)
          :(task.titre)
        }  
      </td>
      <td>
          {isEditing ? (
          <textarea name="description" value={editedTask.description} onChange={handleChange} />
        ) : (
          task.description
        )}
      </td>
      <td>
        {isEditing ? (
          <select name="statut" value={editedTask.statut} onChange={handleChange}>
            <option value="A faire">À faire</option>
            <option value="En cours">En cours</option>
            <option value="Termine">Terminé</option>
          </select>
        ) : (
          <span className={`statut-badge ${getStatutClass(task.statut)}`}>
            {task.statut}
          </span>
        )}
      </td>

      <td>
        {isEditing ? (
          <select name="priorite" value={editedTask.priorite} onChange={handleChange}>
            <option value="Haute">Haute</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Basse">Basse</option>
          </select>
        ) : (
          <span className={`priorite-badge ${getPrioriteClass(task.priorite)}`}>
            {task.priorite}
          </span>
        )}
      </td>

      <td>
        {isEditing ? (
          <input type="date" name="dateLimite" value={editedTask.dateLimite} onChange={handleChange} />
        ) : (
          task.dateLimite
        )}
      </td>

      <td className="actions">
        {isEditing ? (
          <>
            <button className="save-btn action-btn" onClick={() => onSave(editedTask)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </button>
            <button className="annul-btn action-btn" onClick={onCancel}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </button>
          </>
        ) : (
          
          <div className='supp-modf'>
              <button className="modf action-btn" onClick={onEdit}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                
              </button>
              <button className="supp action-btn" onClick={onDelete}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </button>
          </div>
        )}
      </td>
    </tr>

  );
}

export default TaskItem;