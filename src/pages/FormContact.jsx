import React from "react"
import { Link } from "react-router-dom";

import Item from "../model/Item";

import '../css/form.css'
import HomeImg from '../images/white-home.jpg'

const SAVED_ITEMS = "savedItems"

function FormContact(props){
    
    const [data, setData] = React.useState([]);

    const [name, setName] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [mail, setMail] = React.useState('');
    const [about, setAbout] = React.useState('');

    React.useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if(savedItems)
          setData(savedItems)
      }, [])

    React.useEffect(() => {
        if(data.length !== 0)
            localStorage.setItem(SAVED_ITEMS, JSON.stringify(data))
    }, [data])

    const handleSubmit = (event) => {
        event.preventDefault()

        const objetoFinal = {
            id: data.length + 1,
            name: name,
            contact: contact,
            mail: mail,
            about: about
        }

        let it = new Item(objetoFinal)
        setData([...data, it])

        setName('')
        setContact('')
        setMail('')
        setAbout('')
    }

    return (
        <div className="containerDetails">
            <div className="top_container">
                <h1 className="main_title">Detlhes</h1>
                <Link to="/">
                    <button className="back_button">
                        <img src={HomeImg} alt="" />
                    </button>
                </Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div id="form_container">
                    <div className="input_fields">
                        <label htmlFor="name">Nome: </label>
                        <input onChange={(e) => setName(e.target.value)} id="name" name="name" type="text" value={name}></input>
                    </div>
                    <div className="input_fields">
                        <label htmlFor="contact">Contato: </label>
                        <input onChange={(e) => setContact(e.target.value)} id="contact" name="contact" type="tel" value={contact}></input>
                    </div>
                    <div className="input_fields">
                        <label htmlFor="mail">Email: </label>
                        <input onChange={(e) => setMail(e.target.value)} id="mail" name="mail" type="text" value={mail}></input>
                    </div>
                    <div className="input_fields">
                        <label htmlFor="about">Sobre: </label>
                        <textarea onChange={(e) => setAbout(e.target.value)} name="about" id="about" cols="30" rows="10" value={about}>
                        </textarea>
                    </div>
                </div>
                <button className="success_button send_button" type="Submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default FormContact