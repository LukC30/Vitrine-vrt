import React from "react";
import Header from '../components/header';
import Texto from "../components/Texto";
import Imagem from '../components/livro';
import Container from 'react-bootstrap/Container';
import '../App.css';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react'


export default function App() {
  const { id } = useParams();
  console.log(id);


  const [produto, setProduto] = useState([]);

  useEffect(() => {
      getProd();
  }, [])


  
  function getProd() {
      axios.get(`http://localhost:80/backend/produtos.php/${id}`)
          .then((response) => {
              setProduto(response.data);
              console.log(setProduto);
          })
          .catch((error) => {
              console.error('Erro ao buscar produto:', error);
          });
  }



  return (
    <div>
      <Header />
      <Container style={{ marginTop: "5%" }} className="containerr">

        <Imagem
          fonte={produto.caminho}
        />

        <Texto
          produto={produto.descricao}
          nomeGrupo={produto.nome_grupo}
          autor={"Fornecedor"}
          linkAutor={"Link do fornecedor"}
          descricao={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
          preco={produto.preco}
        />

      </Container>
    </div>
  )
}