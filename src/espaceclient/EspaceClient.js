import React    from "react";
import FormSaveUser from "./FormSaveUser";
import Connexion from "./connexion.js";



const EspaceClient = () => {

    return (
        <div className="EspaceClient">
            <h1>EspaceClient</h1>
            <div className="row">
                <div className="col-md-6">
                    <FormSaveUser  className = "FormSaver"/>
                    <Connexion className = "Connexion"/>
                </div>
            </div>
        </div>
    )
}

export default EspaceClient