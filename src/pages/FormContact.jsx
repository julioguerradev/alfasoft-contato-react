import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Item from "../model/Item";
import '../css/form.css';
import HomeImg from '../images/white-home.jpg';

const SAVED_ITEMS = "savedItems";

function FormContact(props) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [mail, setMail] = useState('');
  const [about, setAbout] = useState('');
  const [imageBase64, setImageBase64] = useState(''); // Novo estado para armazenar a imagem em base64

  const { id } = useParams();
  const list = JSON.parse(localStorage.getItem(SAVED_ITEMS));
  const contacts = list.find(contact => contact.id === parseInt(id));

  React.useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if (savedItems) setData(savedItems);

    if (contacts) {
      setName(contacts.name);
      setContact(contacts.contact);
      setMail(contacts.mail);
      setAbout(contacts.about);
      setImageBase64(contacts.image); // Define a imagem do contato existente, caso haja
    }
  }, []);

  React.useEffect(() => {
    if (data.length !== 0)
		
      localStorage.setItem(SAVED_ITEMS, JSON.stringify(data));
  }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!contacts) {
      const objetoFinal = {
        id: data.length + 1,
        name: name,
        contact: contact,
        mail: mail,
        about: about,
        image: imageBase64
      };
        let it = new Item(objetoFinal);
        setData([...data, it]);

    } else {
      contacts.name = name;
      contacts.contact = contact;
      contacts.mail = mail;
      contacts.about = about;
      contacts.image = imageBase64;

      setData(list);
    }
  };

  // Função para converter a imagem em base64 ao selecioná-la
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    
    reader.onloadend = () => {
        setImageBase64(reader.result);
    };

    if (file) {
        reader.readAsDataURL(file);
    }
  };

  return (
    <div className="containerDetails">
      <div className="top_container">
        <h1 className="main_title">Detalhes</h1>
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
            <input onChange={(e) => setName(e.target.value)} id="name" name="name" type="text" value={name} minLength="5" required></input>
          </div>
          <div className="input_fields">
            <label htmlFor="contact">Contato: </label>
            <input onChange={(e) => setContact(e.target.value)} id="contact" name="contact" type="tel" value={contact} minLength="9" required></input>
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
          <div className="input_fields">
            <label htmlFor="image">Imagem: </label>
            <input onChange={handleImageChange} id="image" name="image" type="file" accept="image/*" required></input>
            {imageBase64 && <img src={imageBase64} alt="Imagem selecionada" />} {/* Renderiza a imagem selecionada */}
          </div>
        </div>
        <button className="success_button send_button" type="submit">{contacts ? 'Editar' : 'Cadastrar'}</button>
      </form>
    </div>
  );
}

export default FormContact;
