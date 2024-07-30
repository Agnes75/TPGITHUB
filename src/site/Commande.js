import LigneCommandes from "./LigneCommandes"


class Commande{

    constructor(id,prix,dateAchat,ligneCommandes) {
        this.id = id
        this.prix = prix
        this.dateAchat = dateAchat
        this.ligneCommandes = ligneCommandes
    }
}

export default Commande