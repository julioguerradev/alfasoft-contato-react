import React from "react";



import Person from "./Person.jsx";

function Cards (props){
    return (
        <div className="objects-box">
            {props.list.map(person => {
                return (
                    <div key={person.id} className="object">
                        <Person list={person} onDelete={props.onDelete}/>
                    </div>
                )})}
        </div>
    );
}

export default Cards
