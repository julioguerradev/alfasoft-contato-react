import React from "react";



import Person from "./Person.jsx";
import Modal from "./Modal";

function Cards (props){
    const [active, setActive] = React.useState('')
    const [id, setId] = React.useState()

    const onActivate = activate => {
        setActive(activate)
    }

    const getId = (item) => {
        setId(item);
    }

    return (
        <div className="objects-box">
            {props.list.map(person => {
                return (
                    <div key={person.id} className="object">
                        <Person list={person} onActivate={onActivate} onDelete={props.onDelete} active={active} getId={getId}/>
                    </div>
                )})}
            <Modal onActivate={onActivate} onDelete={props.onDelete} passDeleteId={id} active={active} ></Modal>
        </div>
    );
}

export default Cards
