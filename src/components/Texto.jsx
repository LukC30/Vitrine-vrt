
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import Button from "react-bootstrap/Button";

function Texto({ produto, fornecedor, linkAutor, nomeGrupo, descricao, preco, caminho }) {
    const [qtd, setQtd] = useState(1);

    function cart(){
        let cartJson = localStorage.getItem("produtos");
        let carrinho = cartJson ? JSON.parse(cartJson) : [];
        let precoTot = preco * qtd;
        let produtoCart = {
        nome: produto,
        quantidade: qtd,
        precoUnit: (preco).toFixed(2),
        precoTotal: (precoTot).toFixed(2)
        };
        setQtd(1);
        carrinho.push(produtoCart);
        localStorage.setItem("produtos", JSON.stringify(carrinho));
        console.log(localStorage.getItem("produtos"));
        alert("Seu produto foi adicionado ao carrinho!");
    }
 

    return (
        <div className="divTexto">
            <h2 className="tituloLivro">
                {produto} <br /><br /><span className="tipoLivro">{nomeGrupo}</span>
            </h2> <br />
            <p className="autor">Feito por <a className="links" href={linkAutor}>{ }</a></p>
            <hr className="hr"></hr>
            <p className="descricao">
                {descricao}
            </p><hr className="hr"></hr>
                <Row>
                    <Col>
                        <span style={{ justifyContent: 'right' }}>R$ {(preco*qtd).toFixed(2)}</span>
                    </Col>
                    <Col>
                        <Button type="button" variant="light" onClick={() => setQtd( qtd > 0 && qtd - 1)}> - </Button>
                        <span> {qtd} </span>
                        <Button type="button" variant="light" onClick={() => setQtd(qtd + 1)}>+</Button>
                    </Col>
                </Row>
                <br />
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button" onClick={cart}>Enviar ao carrinho</button>
                </div>
              </div>

    );
}

export default Texto;