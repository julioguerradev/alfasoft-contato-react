import React from "react";

import '../css/app.css'
import '../css/card.css'

import FormContact from "../components/FormContact";
import List from "../model/List";
import Empty from "../components/EmptyInfo";
import Item from "../model/Item";
import Cards from "../components/Cards";


function Home() {
  // const [data, setData] = React.useState(List);
  const [data, setData] = React.useState([]);

  const onDelete = (id) => {
    setData(data.filter(item => id != item.id))
  }

  const onAddItem = (item) => {
    let it = new Item(item)
    setData([...data, it])
  }

  return (
    <div className="main_container">
      <FormContact onAddItem={onAddItem} qtd={data.length}></FormContact>
      <div className="objects-box">
        {data.length === 0 ? <Empty /> : <Cards list={data} onDelete={onDelete} />}
      </div>
    </div>
  );
}



export default Home;
