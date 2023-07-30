import { Link } from "react-router-dom";

function Person({ list, onDelete }) {
  return (
    <main className="container">
      <div className="content">
        <h2>{list.name}</h2>
        <p>{list.mail}</p>

        <div className="actions">
          <Link to={`/details/${list.id}`} >
            <button className="success_button">Detalhes</button>
          </Link>
          <button onClick={() => onDelete(list.id)} className="delete_button">Deletar</button>
        </div>
        
      </div>
        <img src = {list.image} alt="image of a person" />
    </main>
  )
}

export default Person
