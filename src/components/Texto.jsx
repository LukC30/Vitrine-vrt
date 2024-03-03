
import React from "react";


function Texto({ titulo, autor, linkAutor, tipoLivro,  descricao}) {
    
    return(
    <div className="divTexto">
        <h2 className="tituloLivro">
            {titulo} <span className="tipoLivro">{tipoLivro}</span>
        </h2> <br/>
        <p className="autor">Feito por <a  className="links"href={linkAutor}>{autor}</a></p>
        <br/>
        <hr className="hr"></hr>
        <br/>
        <p className="descricao">
            {descricao}
        </p>
        <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">Enviar ao carrinho</button>
        
        </div>
    </div>
    );
}

export default Texto;