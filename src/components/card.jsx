import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Card({ id }) {
    const [produto, setProduto] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigator = useNavigate();

    useEffect(() => {
        getProd();
    }, [])

    function getProd() {
        axios.get(`http://localhost:80/backend/produtos.php/${id}`)
            .then((response) => {
                setProduto(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Erro ao buscar produto:', error);
                setLoading(false);
            });
    }
   
    if (loading) {
        return <p>Carregando...</p>; // Exibe uma mensagem de carregamento enquanto os dados estão sendo carregados
    }

    if (!produto) {
        return <p>Nenhum produto encontrado.</p>; // Exibe uma mensagem se nenhum produto for encontrado
    }

    return (
        <div class="card" style={{width: '15%', marginLeft: "4.3%", }}>
        <img src={produto.caminho} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{produto.descricao}</h5>
          <p></p>
          <p class="card-text">Descricao do produto</p>
          <a href={`/produto/${id}`} class="btn btn-primary">Ver mais</a>
        </div>
      </div>
    );
}
