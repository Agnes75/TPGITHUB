import React from "react";
import {useState,useContext} from "react";
import User from "../model/User"
import api from "../api/Api";
import { useNavigate } from "react-router-dom";
import UserContext from "./Usercontext"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Connexion=()=> {
   
    const [email ,setEmail] =useState("")
    const [mdp ,setMdp] = useState("")
    const [users ,setUsers] =useState([])
    const navigate = useNavigate();
    const { setUserConnecte } = useContext(UserContext);
    const { setUser } = useContext(UserContext);
    
        React.useEffect (() => {
            
            const recupUsers = async () => {
                try {
                    const respUser= await api.post("/api/users/all");
                    const listUsers = respUser.data.map(
                        user => new User(user.id, user.nom, user.prenom, user.email, user.mdp, user.role)
                    );
                    setUsers(listUsers);
                    
                } catch (error) {
                    console.error(error);
                    toast.error('Erreur lors de la récupération des utilisateurs');
                }

                
            };
            
        recupUsers();  
            
    
        }, [])

        const handleSubmit = async (e) => {
            e.preventDefault();
    
            const userconnecte = {
                email,
                mdp
            }          

            const trouveUser = (userconnecting) =>{
            const userTrouve = users.find(user => user.email === userconnecting.email && user.mdp === userconnecting.mdp);
            if (userTrouve) {
             setUser(userTrouve)
              if (userTrouve.role === "USER") {       
                  setUserConnecte(userconnecte);
                  toast.success("Vous êtes redirigé vers votre espace Personnel")
                  setTimeout(()=>navigate('/profil-commandes'),150);
                  ;
              } else if (userTrouve.role === "ADMIN") {
                  
                  setUserConnecte(userconnecte);
                  toast.success("Vous êtes redirigé vers votre espace Administrateur")
                  setTimeout(()=>navigate('/admin'),150);
              } else {
                  toast.error('Vous n\'êtes pas inscrit, veuillez vous inscrire.');
                  navigate('/espace-client');
              }
          } else {
              toast.error('Aucun utilisateur trouvé avec cet email et mot de passe.');
          }
      };
  
            trouveUser(userconnecte)
                    }
      return (
    <>
    <form onSubmit ={handleSubmit}>
        <h1> Connexion</h1>
        <input label="email" type ="text" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
        <input label="mdp" type ="password" name="mdp" onChange={(e)=>{setMdp(e.target.value)}}/>         
        <button type="submit"> Connexion</button>
    </form>
    <ToastContainer />
    </>

)

};


export default Connexion