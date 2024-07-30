import { Card, Row, Col } from "react-bootstrap";
import React, { useState, useEffect,useContext ,} from "react";
import api from "../api/Api";
import Produit from "../model/Produit";
import UserContext from "./Usercontext"
import { useNavigate } from "react-router-dom"

const TriProduits = () => {
    const { setIdProduit } = useContext(UserContext);
    const [produits, setProduits] = useState([]);
    const [ordreTri, setOrdreTri] = useState('Croissant');
    const navigate = useNavigate();
    const recupProduits = async () => {
        try {
            const response = await api.post("/api/produit/all");
            const listProduits = response.data.map(
                produit => new Produit(produit.id, produit.nom, produit.prix, produit.image, produit.description, produit.tail)
            );
            setProduits(listProduits);
        } catch (error) {
            console.log(error);
        }
    };

    const trierProduits = (produits, ordre) => {
        return produits.sort((a, b) => {
            if (ordre === 'Decroissant') {
                return a.prix - b.prix;
            } else if (ordre === 'Croissant') {
                return b.prix - a.prix;
            } else {
                return 0;
            }
        });
    
    };

    useEffect(() => {
        recupProduits(); 
    }, []);

    useEffect(() => {
        setProduits(prevProduits => trierProduits(prevProduits, ordreTri));
    }, [ordreTri]);

    const handleChangeTri = (event) => {
        setOrdreTri(event.target.value);

    };

    const handleClick = (event) => {
        setIdProduit( event.target.name)
        navigate ('/detail-produit');
       
    }
   
    return (
        <>
            <select onChange={handleChangeTri} value={ordreTri}>
                <option value="Croissant">Tri décroissant</option>
                <option value="Decroissant">Tri croissant</option>
                <option value="">-</option>
            </select>
            <Row>
                {produits.map(produit => (
                    <Col key={produit.id} sm={6} md={4} lg={3} className="mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={produit.image} className="product-image" />
                            <Card.Body>
                                <Card.Title>{produit.nom}</Card.Title>
                                <Card.Text>
                                    {produit.prix} €
                                </Card.Text>
                                <button name={produit.id} onClick= {handleClick} >Voir le détail du Produit</button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default TriProduits;