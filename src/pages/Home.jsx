import React from "react";

import '../css/app.css'
import '../css/card.css'

import Empty from "../components/EmptyInfo";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

const SAVED_ITEMS = "savedItems"

function Home() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
    if(savedItems)
      setData(savedItems)
  }, [])

  const onDelete = (id) => {
    setData(data.filter(item => id != item.id))
  }

  return (
    <div className="containerDetails">
      <div className="top_container">
        <h1 className="main_title">Lista de Contatos</h1>
      </div>
      <div className="subContainer">
        <div className="actionsBar">
          <Link to="/create">
            <button className="new_button">Criar contato</button>
          </Link>
        </div>
        {data.length === 0 ? <Empty /> : <Cards list={data} onDelete={onDelete} />}
      </div>
    </div>
  );
}



export default Home;
