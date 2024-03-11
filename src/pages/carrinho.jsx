import react, { useEffect } from 'react';
import { useState } from 'react';
import Header from '../components/header';
import { redirect } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

export default function Carrinho() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        verificarCarrinho();
    }, [])
    let precoCarrinho = 0;
    let carrinho = localStorage.getItem("produtos")
    let carrinhoJson = JSON.parse(carrinho);
    let itemList = "Olá, essa é minha lista:\n";
    
    function verificarCarrinho() {
        if (carrinho == null) {
            window.location.href = '/'
            alert("Parece que você não comprou nada ainda, vamos voltar para o site!")

        }

    }

    function enviarItens() {
        setShow(false)
        carrinhoJson.map((produto) => {
            itemList += `\n\nNome: ${produto.nome} \nQuantidade: ${produto.quantidade} \nPreço total: R$: ${(produto.precoTotal)}`;
        })
        itemList += `\n\nPreço Total: R$: ${(precoCarrinho).toFixed(2)}`
        let mensagem = encodeURIComponent(itemList)
        localStorage.clear();
        window.location.href = `https://wa.me/5521981981510?text=${mensagem}`

    };


    return (
        <div>
            <Header />
            <br />
            <br />
            <Container>
    <Row className="justify-content-center">
        <Col xs={12} md={10}>
            <Table bordered hover size="sm" style={{ maxWidth: '100%', fontSize:"small" }}>
                <thead>
                    <tr>
                        <th>Numero de pedidos</th>
                        <th>Nome do produto</th>
                        <th>Quantidade</th>
                        <th>Preço Unitario</th>
                        <th>Preço total do produto</th>
                    </tr>
                </thead>
                <tbody>
                    {carrinhoJson != null && carrinhoJson.map((produto, index) => {
                        precoCarrinho += parseFloat(produto.precoTotal);
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.quantidade}</td>
                                <td>R$ {produto.precoUnit}</td>
                                <td>R$ {produto.precoTotal}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Col>
    </Row>
    <Row className="justify-content-center">
        <Col xs={12} md={10}>
            <div className="d-flex justify-content-between">
                <div>
                    <span>Preço total dos itens:</span>
                    <h5 style={{ fontSize: 'medium', display: 'inline-block', marginLeft: '5px' }}>R$: {precoCarrinho.toFixed(2)}</h5>
                </div>
                <button className="btn btn-primary" onClick={handleShow}>ENVIAR</button>
            </div>
        </Col>
    </Row>
</Container>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Comprar</Modal.Title>
                </Modal.Header>
                <Modal.Body>Após confirmar, você será redirecionado ao nosso link de compra e seu carrinho será apagado</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={enviarItens}>
                        Comprar!
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}