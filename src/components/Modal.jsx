import React from 'react'
import '../css/modal.css'

function Modal(props) {
    return (
        <div className={"modal_container " + props.active}>
            <div className="card_modal">
                <div className="modal_titulo">Apagar </div>
                <div className="modal_text">
                    <p>
                        Tem certeza que deseja apagar este item ?
                        <br/>
                        Após confirmar, este item não poderá ser recuperado
                    </p>
                </div>
                <div className="modal_actions">
                    <button className='delete_button' onClick={() => {props.onActivate('')}}>Cancelar</button>
                    
                    <button onClick={() => {
                        props.onDelete(props.passDeleteId)
                        props.onActivate('')}
                        } className="success_button">Sim</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
