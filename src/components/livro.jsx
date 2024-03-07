


function Imagem({fonte, alt}) {
        return (
            <div className="cardImagem">
                <img id='imgLivro' className='imagem' src={fonte} alt={alt} style={{width:'50%', height:'auto'}}></img>
                <div id="lupinha"></div>
            </div>

        );
    }


export default Imagem;