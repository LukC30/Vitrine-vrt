


function Livro({fonte, alt}) {
        return (
            <div className="cardImagem">
                <img id='imgLivro' className='imagem' src={fonte} alt={alt}></img>
                <div id="lupinha"></div>
            </div>

        );
    }


export default Livro;