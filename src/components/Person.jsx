import { Link } from "react-router-dom";

function Person(props) {
  
  return (
    <>
    <main className="container">
      <div className="content">
        <h2>{props.list.name}</h2>
        <p>{props.list.mail}</p>

        <div className="actions">
          <Link to={`/details/${props.list.id}`} >
            <button className="success_button">Detalhes</button>
          </Link>
          <button onClick={() => {
						    props.onActivate('active')
                props.getId(props.list.id)
              }
						} className="delete_button">Deletar</button>
        </div>
      </div>
        <img src = {props.list.image} alt="image of a person" />
    </main>
    </>
  )
}

export default Person
