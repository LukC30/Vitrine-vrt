
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import Button from "react-bootstrap/Button";

function Texto({ produto, fornecedor, linkAutor, nomeGrupo, descricao, preco }) {
    const [qtd, setQtd] = useState(1);
    let index = 0;

    function submitItens() {
        
        index+=1;
        let prod = [qtd,produto]
        localStorage.setItem('produto', prod);
        console.log(index ,localStorage.getItem("produto"));
        setQtd(0);
    }
    return (
        <div className="divTexto">
            <h2 className="tituloLivro">
                {produto} <br /><br /><span className="tipoLivro">{nomeGrupo}</span>
            </h2> <br />
            <p className="autor">Feito por <a className="links" href={linkAutor}>{ }</a></p>

            <hr className="hr"></hr>
            <br />
            <p className="descricao">
                {descricao}
            </p><hr className="hr"></hr>
            <Row>
                <Col>
                    <span style={{ justifyContent: 'right' }}>R$ {preco}</span>
                </Col>
                <Col>
                    <Button type="button" variant="light" onClick={() => setQtd(qtd - 1)}> - </Button>
                    <span> {qtd} </span>
                    <Button type="button" variant="light" onClick={() => setQtd(qtd + 1)}>+</Button>
                </Col>
            </Row>
            <br />
            <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button" onClick={submitItens}>Enviar ao carrinho</button>
            </div>
        </div>
    );
}

export default Texto;