import React from "react";
import api from "../api/Api";
import User from "../model/User";


const GestiondesUsers = () => {

    const [users, setUsers] = React.useState([]);

    const recupUsers = async () => {
      api.post("/api/users/all")
        .then(function (response) {
          const listUsers = response.data.map(
              user => new User(user.id, user.nom, user.prenom, user.email,user.mdp, user.role)
          )
            setUsers(listUsers);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    // useEffect
    React.useEffect(() => {
        recupUsers();
    }, []);

    return (
        <>
            <h1>Affichage des Utilisateurs</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Identité</th>
                        <th scope="col">email</th>
                        <th scope="col"> mdp</th>
                        <th scope="col"> role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <th scope="row">{user.prenom}  {user.nom}</th>
                            <td >{user.email}</td>
                            <td>{user.mdp} </td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default GestiondesUsers


