import React from "react";
import { Link, useParams } from "react-router-dom";

import '../css/details.css'
import HomeImg from '../images/white-home.jpg'
import Pencil from '../images/whien-pencil.png'

function Details() {

    const {id} = useParams()
    const list = JSON.parse(localStorage.getItem('savedItems'))
    const contacts = list.find(contact => contact.id === parseInt(id))

    return (
        <div className="containerDetails">
            <div className="top_container">
                <h1 className="main_title">Detalhes</h1>
                <div className="actionsBar">
                    <Link to={"/edit/" + contacts.id}>
                        <button className="edit_button">
                            <img src={Pencil} alt="" />
                        </button>
                    </Link>
                    <Link to="/">
                        <button className="back_button">
                            <img src={HomeImg} alt="" />
                        </button>
                    </Link>
                </div>
                
            </div>
            <div className="details">
                <div className="photoDetails">
                    <img src={contacts.image} alt="perfil" />
                </div>
                <div className="infoDetails">
                    <div className="mainContactsInfo">
                        <div className="info">
                            <h4>Nome:</h4>
                            <p>{contacts.name}</p>
                        </div>
                        <div className="info">
                            <h4>Email:</h4>
                            <p>{contacts.mail}</p>
                        </div>
                        <div className="info">
                            <h4>Contato:</h4>
                            <p>{contacts.contact}</p>
                        </div>
                    </div>
                    <div className="info">
                        <h4>Sobre:</h4>
                        <p>{contacts.about}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details
