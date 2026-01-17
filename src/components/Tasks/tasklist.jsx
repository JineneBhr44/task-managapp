import React, { useState } from "react";
import Taskform from "./taskForm";
import Taskitem from "./taskitem";
import { useNavigate } from "react-router-dom";
import"./tasks.css";

function Tasklist (){
    const navigate = useNavigate();
    const [tasks, setTasks]=useState([
        {
            id: 1,
            titre: "Préparer rapport mensuel Janvier",
            description: "Chiffres ventes + stock",
            statut: "En cours",
            priorite: "Haute",
            dateLimite: "20/01/2026",
        },
        {
            id: 2,
            titre: "Mettre à jour base clients",
            description: "Ajouter nouveaux contacts 2026",
            statut: "À faire",
            priorite: "Moyenne",
            dateLimite: "05/02/2026",
        },
        {
            id: 3,
            titre: "Corriger bug page login",
            description: "Erreur sur mobile",
            statut: "Terminé",
            priorite: "Haute",
            dateLimite: "12/01/2026",
        },
        /*{
            id: 4,
            titre: "Planifier réunion équipe Q1",
            description: "Discussion objectifs 2026",
            statut: "À faire",
            priorite: "Basse",
            dateLimite: "30/01/2026",
        },*/
    ]);
    const [showForm, setShowform]=useState(false);

    const handleAddTask=(newTask)=>{
        setTasks((prev)=>[...prev,{id:Date.now(),...newTask}]);                     {/* important */}
        setShowform(false);
    };
    const handleLogout = () => {
        navigate("/");
    };

    return(
        <div className="all-tasklist">
            <div className="task-header">
                <h1 className="task-title">Liste des tâches-Provesta Soft</h1>
                <button 
                className="addtask-btn"
                type="button"
                onClick={()=>setShowform(true)}>
                    + Ajouter une tâche
                </button>
            </div>
            <div className="filtres">
                <select >
                    <option value="statut">Statut ▼</option>
                    <option value="En cours">En cours</option>
                    <option value="À faire">À faire</option>
                    <option value="Terminé">Terminé</option>
                </select>
                <select >
                    <option value="Priorite">Priorité ▼</option>
                    <option value="Haute">Haute</option>
                    <option value="Moyenne">Moyenne</option>
                    <option value="Basse">Basse</option>
                </select>
                <select >
                    <option>Date limite ▼</option>
                    <option>Cette semaine</option>
                    <option>Ce mois</option>
                    <option>En retard</option>
                </select>
            </div>
            {
                showForm && (<Taskform 
                onAddTask={handleAddTask} 
                onClose={()=>setShowform(false)}                    /* important */
                />)
            }
            <div className="table-wrapper">
                <table className="task-table">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Description</th>
                            <th>Statut</th>
                            <th>Priorité</th>
                            <th>Date limite</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task)=>(
                            <Taskitem key={task.id} task={task}/>                    /* important */
                        ))}
                    </tbody>
                </table>
            </div>
            {
                tasks.length===0 && (<p className="no-tasks">Aucune tâche à afficher.</p>)
            }
            <div className="logout-container">
                <button className="deconnect" onClick={handleLogout}> Se Deconnecter </button>
            </div>
        </div>
    );
}
export default Tasklist;