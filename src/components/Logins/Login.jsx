import { useState } from "react";
import "./Loginstyle.css";
import { useNavigate } from "react-router-dom";

function Login(){
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[showPassword , setShowPassword]=useState(false);
    const [error , setError]=useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password){
            setError ("Veuillez remplir tous les champs");
            return;
        }
        if (!email.includes ("@") || !email.includes(".")){
            setError("Veuillez entrer une adresse email valide");
            return;
        }
        if (password.length < 6){
            setError("Le mot de passe doit contenir au moins 6 caractères");
            return;
        }
        setError("");
        navigate("/tasks");
    };

    return (
        <div className="login-container">
            <div className="login-wrapper"> 
                {/*partie gauche ; welcome text*/}
                <div className="welcome-side">
                    <h1>Bienvenue <br />sur Provesta Soft</h1>
                    <p className="subtitle">
                        Gérez vos projets, tâches et équipes en toute efficacité.  
                        Suivi en temps réel, collaboration fluide et résultats concrets.  
                        Connectez-vous pour accéder à votre espace de travail.
                    </p>
                    
                    <div className="social-icons">
                    <a
                        href="https://www.facebook.com/provestasoftware"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Suivez Provesta Software sur Facebook"
                        aria-label="Facebook de Provesta Software"
                    >
                        <span className="fab fa-facebook-f text-xl" aria-hidden="true"></span>
                    </a>

                    <a
                        href="https://www.linkedin.com/company/provesta-software"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Provesta Software sur LinkedIn"
                        aria-label="LinkedIn de Provesta Software"
                    >
                        <span className="fab fa-linkedin-in text-xl" aria-hidden="true"></span>
                    </a>

                    <a
                        href="https://www.instagram.com/provestasoft"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Provesta Soft sur Instagram"
                        aria-label="Instagram de Provesta Soft"
                    >
                        <span className="fab fa-instagram text-xl" aria-hidden="true"></span>
                    </a>
                    </div>
                </div>
                 {/*partie droite ; formulaire*/}
                <div className="form-side">
                    <h2>Se connecter</h2>

                    {error && <div className="error-msg">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="form-email">
                            <label htmlFor="email">Adresse email</label>
                            <input 
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder="exemple@provestasoft.com"
                                required
                            />
                        </div>

                        <div className="form-pass">
                            <label htmlFor="password">Password</label>
                            <input 
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange ={(e)=>setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                            />
                    
                    
                            <button 
                                type="button"
                                className="show-pass"
                                onClick={()=>setShowPassword(!showPassword)}
                            >
                                {showPassword ? 'Cacher':'Afficher'}
                            </button>
                        </div>
                        <div className="remember-grp">
                            <label className="remember-me">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e)=> setRememberMe (e.target.checked)}
                                />
                                <span>Se souvenir de moi</span>
                            </label>
                            <a href="https://passwords.google.com/?hl=fr&pli=1" className="forgot-pass">Mot de passe oublié ?</a>
                        </div>

                        <button 
                            type="submit"
                            className="loginbtn"
                            >
                                Se connecter
                        </button>
                    </form>

                    <p className="terms">
                        En cliquant sur "Se connecter", vous acceptez nos <br />
                        <a href="https://www-provesta.com/terms-of-service-and-privacy-policy/">Conditions d'utilisation</a> | <a href="https://www-provesta.com/terms-of-service-and-privacy-policy/">Politique de confidentialité</a>
                    </p>
                </div>
            </div>
        </div>
    );
}  
export default Login ;