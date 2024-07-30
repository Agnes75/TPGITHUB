import Produits from "./Produit"


class LigneCommandes{

    constructor(id,prix, produit,quantite) {
        this.id = id
        this.produit = produit
        this.quantite = quantite
        this.prix =prix
   
    }

}
export default LigneCommandes