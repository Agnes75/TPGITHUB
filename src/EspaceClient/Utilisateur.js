import React    from "react";
import VoirMesCommandes from "./VoirMesCommandes";
import VoirMonProfil from "./VoirMonProfil";

const Utilisateur = () => {

    return (
        <div>
            <h1>Votre Espace Personnel</h1>
            <VoirMonProfil/>
            <VoirMesCommandes/>
        </div>
    )
}

export default Utilisateur