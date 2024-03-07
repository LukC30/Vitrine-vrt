import Header from '../components/header';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


export default function Cadastro() {
   
    const [product, setProduct] = useState("");
    const [description, setDescription] = useState("");
    const cadastro = {
        produto: product,
        descricao: description
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:80/backend/Api.php", cadastro).then((response) => {
            console.log(response.data);
            Navigator('/');
        })

    }

    return (
        <>
            <Header />
            <form onSubmit={handleSubmit} className='divCadastro'>
                <h3 className='mb-4'>Cadastro de produtos</h3>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                        Produto
                    </InputGroup.Text>
                    <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        value={product}
                        onChange={(e) => { setProduct(e.target.value) }}
                    />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Descricao</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                </InputGroup><br />
                <Button as="input" type="submit" value="Cadastrar" className='ml-1' style={{width: '7%'}} />
            </form>
        </>
    )
}