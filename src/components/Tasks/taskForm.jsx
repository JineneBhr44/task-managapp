import React from "react";
import { useState } from "react";
import"./tasks.css";

function Taskform({onAddTask , onClose}){
    const [formData, setFormdata]=useState(
        {
            titre:"",
            description:"",
            statut:"A faire",
            periorite:"Moyenne",
            dateLimite:"",
        }
    );

    const handleChange = (e)=>{                  {/*important */}
        setFormdata((prev) => ({...prev, [e.target.name] : e.target.value}));
    };
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!formData.titre || !formData.dateLimite){
            alert("Titre et date limite obligatoires !");
            return;
        }
        /*ba3d il verification chnia bch ysir */
        onAddTask(formData);
        onClose();
    };

    return(
        <div className="form-container">
            <h2 className="form-title">Ajouter une tâche</h2>
            <form onSubmit={handleSubmit}>
                <div className="tform">
                    <label>Titre *</label>
                    <input type="text"
                    placeholder="Titre"
                    name="titre"
                    onChange={handleChange}
                    value={formData.titre}
                    required
                    />
                </div>
                <div className="tform">
                    <label >Description</label>
                    <textarea
                    name="description" 
                    onChange={handleChange}
                    value={formData.description}
                    >
                        Description
                    </textarea>
                </div>
                <div className="tform">
                    <label >Statut</label>
                    <select name="statut" onChange={handleChange} value={formData.statut}>
                    <option value="En cours">En cours</option>
                    <option value="À faire">À faire</option>
                    <option value="Terminé">Terminé</option>
                </select>
                </div>
                <div className="tform">
                <label >Priorite</label>
                <select name="priorite" onChange={handleChange} value={formData.periorite}>
                    <option value="Haute">Haute</option>
                    <option value="Moyenne">Moyenne</option>
                    <option value="Basse">Basse</option>
                </select>
                </div>
                <div className="tform">
                    <label >Date limite *</label>
                    <input 
                        type="date" 
                        name="dateLimite"
                        value={formData.dateLimite}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-btn">
                    <button type="submit" className="submit-btn">Ajouter</button>
                    <button type="button" className="cancel-btn" onClick={onClose}>Annuler</button>
                </div>
            </form>
        </div>

    );
}
export default Taskform ;