import react, { useEffect } from 'react';
import { useState } from 'react';
import Header from '../components/header';
import { redirect } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Carrinho() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(()=>{
        verificarCarrinho();
    },[])

    let carrinho = localStorage.getItem("produtos")
    let carrinhoJson = JSON.parse(carrinho);
    let itemList = "Olá, essa é minha lista:\n";
    let index = 1;
    function verificarCarrinho(){
    if(carrinho == null){ 
        window.location.href ='/'
        alert("Parece que você não comprou nada ainda, vamos voltar para o site!")
        
    }
  
    }

    function enviarItens() {
        setShow(false)
        carrinhoJson.map((produto) => {
            itemList += `\n\nNome: ${produto.nome} \nQuantidade: ${produto.quantidade}`
        })
        let mensagemZAPZAP = encodeURIComponent(itemList)
        localStorage.clear();
        window.location.href = `https://wa.me/5521981981510?text=${mensagemZAPZAP}`

    };


    return (
        <div>
            <Header />
            <br />
            <br />
            <Table bordered hover size="sm" style={{ width: '40%', margin: "0 auto" }}>
                <tbody>
                    <tr>
                        <th>Numero de pedidos</th>
                        <th>Nome do produto</th>
                        <th>Quantidade</th>
                    </tr>
                    { carrinhoJson!=null && carrinhoJson.map((produto) => (
                            <tr>
                                <th>{index++}</th>
                                <th>{produto.nome}</th>
                                <th>{produto.quantidade}</th>
                            </tr>
                        ))
                    }
                    <br />
                    <button className='btn btn-primary' onClick={handleShow}> ENVIAR</button>
                </tbody>
            </Table>

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