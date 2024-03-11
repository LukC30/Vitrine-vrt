import { useEffect, useState } from 'react';
import Header from '../components/header';
import axios from 'axios';
import '../components/card/card';

export default function Listagem() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        buscarProdutos();
    }, [])


    function buscarProdutos() {
        axios.get('http://localhost:80/backend/produtos.php/').then((response) => {
        setProdutos(response.data)
        })
        .catch((error)=>{
            console.log('erro na busca dos produtos: '+ error);

        })

    }
    return (
        <div>
            <Header />
            <div className='containerxd'>
                {
                    produtos.map((produto) => (
                        <div class="product-card" style={{ rowGap: '10px' }}>
                            <div class="badge">{produto.nomegru}</div>
                            <div class="product-tumb">
                                <img src={produto.caminho} alt="" />
                            </div>
                            <div class="product-details">
                                <span class="product-catagory">{produto.grupo}</span>
                                <h4><a href={`/prod/${produto.id}`}>{produto.descricao}</a></h4>
                                <div class="product-bottom-details">
                                    <div class="product-price"><small></small>R$ {produto.preco}</div>
                                    <div class="product-links">
                                        <a href={`/prod/${produto.id}`}><i class="fa fa-shopping-cart"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>


    )
}