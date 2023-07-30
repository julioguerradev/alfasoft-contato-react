import React from "react";

function NewContact() {
    return (
        <FormContact onAddItem={onAddItem} qtd={data.length}></FormContact>
    )
}

export default NewContact
