import React from "react";
import { Link, useParams } from "react-router-dom";

import List from "../model/List";

function Details() {

    const {id} = useParams()
    const contacts = List.find(contact => contact.id === parseInt(id))

    console.log(contacts)

    return (
        <Link to="/">
            <button>Home</button>
        </Link>
    );
}

export default Details
