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
            dateLimite: "2026/01/20",
        },
        {
            id: 2,
            titre: "Mettre à jour base clients",
            description: "Ajouter nouveaux contacts 2026",
            statut: "A faire",
            priorite: "Moyenne",
            dateLimite: "2026/02/05",
        },
        {
            id: 3,
            titre: "Corriger bug page login",
            description: "Erreur sur mobile",
            statut: "Termine",
            priorite: "Haute",
            dateLimite: "2026/01/18",
        },
        {
            id: 4,
            titre: "Planifier réunion équipe Q1",
            description: "Discussion objectifs 2026",
            statut: "A faire",
            priorite: "Basse",
            dateLimite: "2026/02/04",
        },
    ]);

    const [showForm, setShowform]=useState(false);

    const handleAddTask=(newTask)=>{
        setTasks((prev)=>[...prev,{id:Date.now(),...newTask}]);                     
        setShowform(false);
    };
    const handleLogout = () => {
        navigate("/");
    };
    
    const handleDeletetask =(taskId)=>{
        if(window.confirm("voulez-vous vraiment supprimer cette tâche ?")){
            setTasks((prevTasks)=>prevTasks.filter((t)=>t.id !== taskId));
        }
    };

    const [editingId,setEditingId]=useState(null);

    const handleEdit = (taskId)=>{
        setEditingId(taskId);
    };

    const handleSave = (updateTask)=>{
        setTasks(prev=> prev.map(t=>
            t.id === updateTask.id ? {...t,...updateTask}:t
        ));
        setEditingId(null);
    };

    const handleCancel=()=>{
        setEditingId(null);
    };

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredTasks, setFilteredTasks] = useState(tasks);

    const handleSearch=()=>{
        if(!searchTerm.trim()){setFilteredTasks(tasks); // si champ vide, affiche tout
            return;
        }
        const lowerSearch = searchTerm.toLowerCase();
        const results=tasks.filter(task=>
            task.titre.toLowerCase().includes(lowerSearch)||
            task.description.toLowerCase().includes(lowerSearch)
        );
        setFilteredTasks(results);
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
                        onClick={handleSearch}
                        >
                        🔍
                        </button>
                        {searchTerm && (
                        <button className="clear-btn" onClick={() => {
                                setSearchTerm("");  // efface le texte
                                setFilteredTasks(tasks);  // ← affiche TOUTES les tâches immédiatement
                            }}
                            aria-label="Effacer la recherche">
                                ×
                        </button>
                        )}
                    </div>
                </div>
                <div className="logout-container">
                    <button className="deconnect" onClick={handleLogout}> Se Déconnecter </button>
                </div>
            </div>
            <h1 className="task-title">
                {editingId ? ("Modifier une tâche"):("Mes Tâches – Provesta Soft")}
            </h1>
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
                        {filteredTasks.map((task)=>(
                            <Taskitem 
                            key={task.id} 
                            task={task}
                            onDelete={()=>handleDeletetask(task.id)}
                            onEdit={()=>handleEdit(task.id)}
                            onSave={handleSave}
                            onCancel={handleCancel}
                            isEditing={editingId===task.id}
                            />                    
                        ))}
                    </tbody>
                </table>
                
            </div>
            {filteredTasks.length === 0 && searchTerm.trim() && (
                <p className="no-results">Aucune tâche trouvée pour "{searchTerm}"</p>
            )}
            {
                tasks.length===0 && (<p className="no-tasks">Aucune tâche à afficher.</p>)
            }
            {
                showForm && (<Taskform 
                onAddTask={handleAddTask} 
                onClose={()=>setShowform(false)}                    
                />)
            }
            
        </div>
    );
}
export default Tasklist;