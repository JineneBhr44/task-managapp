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
            statut: "A faire",
            priorite: "Moyenne",
            dateLimite: "05/02/2026",
        },
        {
            id: 3,
            titre: "Corriger bug page login",
            description: "Erreur sur mobile",
            statut: "Termine",
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
    const [searchTerm, setSearchTerm] = useState("");
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
                
                <img src="/logo-pro.jpg" alt="Provesta Soft" className="header-logo" />

                <div className="search-container">
                    <div className="search-wrapper">
                       <input
                        type="text"
                        placeholder="Rechercher une tâche..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                        />
                        <button
                        type="button"
                        className="search-btn"
                        aria-label="Lancer la recherche"
                        >
                        🔍
                        </button>
                        {searchTerm && (
                        <button className="clear-btn" onClick={() => setSearchTerm("")} aria-label="Effacer la recherche">
                            ×
                        </button>
                        )}
                    </div>
                </div>
                <div className="logout-container">
                    <button className="deconnect" onClick={handleLogout}> Se Déconnecter </button>
                </div>
            </div>
            <h1 className="task-title">Liste des tâches-Provesta Soft</h1>
            <div className="filtres-btn">
                <div className="filtres">
                    <select >
                        <option >Statut ▼</option>*
                        <option >En cours</option>
                        <option >À faire</option>
                        <option >Terminé</option>
                    </select>
                    <select >
                        <option >Priorite ▼</option>
                        <option >Haute</option>
                        <option >Moyenne</option>
                        <option >Basse</option>
                    </select>
                </div>
                <button 
                    className="addtask-btn"
                    type="button"
                    onClick={()=>setShowform(true)}>
                        + Ajouter une tâche
                </button>
            </div>
            
            <div className="table-wrapper">
                <table className="task-table">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Description</th>
                            <th>Statut</th>
                            <th>Priorité</th>
                            <th>Date limite</th>
                            <th>Actions</th>
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
            {
                showForm && (<Taskform 
                onAddTask={handleAddTask} 
                onClose={()=>setShowform(false)}                    /* important */
                />)
            }
            <div>

            </div>
            
        </div>
    );
}
export default Tasklist;