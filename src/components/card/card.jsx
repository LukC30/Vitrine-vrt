import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './card.css'

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
        return <p>Carregando...</p>; 
    }

    if (!produto) {
        return <p>Nenhum produto encontrado.</p>; 
    }

    return (
        <div class="product-card" style={{rowGap: '10px'}}>
		<div class="badge">{produto.nomegru}</div>
		<div class="product-tumb">
			<img src={produto.caminho} alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">{produto.grupo}</span>
			<h4><a href={`/prod/${id}`}>{produto.descricao}</a></h4>
			<div class="product-bottom-details">
				<div class="product-price"><small></small>R$ {produto.preco}</div>
				<div class="product-links">
					<a href={`/prod/${id}`}><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>
    );
}
