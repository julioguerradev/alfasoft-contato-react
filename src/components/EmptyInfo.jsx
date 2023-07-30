import '../css/info.css'

function EmptyInfo() {
    return (
        <div className="container_message">
            <div id="info_container">
                <div id="info_header">
                    Ainda não há contatos salvos
                </div>
                <div id="infor_body">
                    Favor Cadastrar um contato para que a mensagem desapareça.
                    <br/>
                    Em caso de dúvidas siga as instruções abaixo:
                    <br/>
                    <br/>
                    <div id="instrucoes">
                        <p>
                            <strong>Primeiro: </strong> Preencha o nome que ve conter no mínimo 5 caracteres.
                        </p>
                        <p>
                            <strong>Segundo: </strong> Preencha o contato seu telefone.
                        </p>
                        <p>
                            <strong>Terceiro: </strong> Preencha o email com algum email válido.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmptyInfo
