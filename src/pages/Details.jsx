import React from "react";
import { Link, useParams } from "react-router-dom";

import '../css/details.css'
import HomeImg from '../images/white-home.jpg'

function Details() {

    const {id} = useParams()
    const list = JSON.parse(localStorage.getItem('savedItems'))
    const contacts = list.find(contact => contact.id === parseInt(id))

    return (
        <div className="containerDetails">
            <div className="top_container">
                <h1 className="main_title">Detlhes</h1>
                <Link to={"/edit/" + contacts.id}>
                    <button>Editar</button>
                </Link>
                <Link to="/">
                    <button className="back_button">
                        <img src={HomeImg} alt="" />
                    </button>
                </Link>
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
