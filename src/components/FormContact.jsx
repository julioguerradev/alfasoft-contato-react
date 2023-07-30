import React from "react"

import '../css/form.css'

function FormContact(props){
    const [name, setName] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [mail, setMail] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault()

        const objetoFinal = {
            id: props.qtd,
            name: name,
            contact: contact,
            mail: mail,
        }
        
        props.onAddItem(objetoFinal)

        setName('')
        setContact('')
        setMail('')
    }

    return (
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
            </div>
            <button className="success_button send_button" type="Submit">Cadastrar</button>
        </form>
    );
}

export default FormContact