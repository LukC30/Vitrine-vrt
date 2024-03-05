import React from "react";
import Header from '../components/header';
import { Axios } from "axios";
import Texto from "../components/Texto";
import Imagem from '../components/livro';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

export default function App({id}) {
  return (
    <div>
      <Header />
      <Container style={{marginTop: "5%"}}>
        <Row>
          <Col>
            <Imagem
              fonte={"https://imgs.search.brave.com/K1ZZjwhWoIfmZvyEtqu7rvx3MXb4QbkL3m40I1Hx3ZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bGVyb3ltZXJsaW4u/Y29tLmJyL3Byb2R1/Y3RzL2FyZWlhX21l/ZGlhX2xhdmFkYV9z/YWNvX2RlXzIwa2df/OTE5NDEyNjJfZjc1/Nl8zMDB4MzAwLmpw/Zw"}
            />
          </Col>
          <Col>
            <Texto
              titulo={"Nome do produto"}
              tipoLivro={"Tipo do produto"}
              autor={"Fornecedor"}
              linkAutor={"Link do fornecedor"}
              descricao={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}