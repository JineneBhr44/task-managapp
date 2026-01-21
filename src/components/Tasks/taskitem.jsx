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
            <button className="save-btn" onClick={() => onSave(editedTask)}>
              Sauvegarder
            </button>
            <button className="annul-btn" onClick={onCancel}>
              Annuler
            </button>
          </>
        ) : (
          
          <div className='supp-modf'>
              <button className="modf" onClick={onEdit}>
                Modifier
              </button>
              <button className="supp" onClick={onDelete}>
                Supprimer
              </button>
          </div>
        )}
      </td>
    </tr>

  );
}

export default TaskItem;