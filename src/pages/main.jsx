import Header from "../components/header"
import Carrossel from "../components/MainComponents/carrossel"
import Produto from '../components/card/card.jsx'
import Teste from '../components/teste'
export default function Main() {

   return (
      <div>
         <Header />
         <Carrossel
            img1={'https://img.kalunga.com.br/fotosdeprodutos/434424z_1.jpg'}
            img2={'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/jabucomb/catalog/api/jabucomb_citelirr/62ceeba2aa83f.jpg'}
            img3={'https://imgs.pontofrio.com.br/1559273951/1xg.jpg'}
         />
         <br /><br />
         <h3 style={{ textAlign: "center" }}>Recomendaçoes</h3>
         <br />
         <div className="containerxd">
            <Produto
               id={5}
            />
            <Produto
               id={4}
            />
            <Produto
               id={9}
            />
            <Produto
               id={3}
            />
            <Produto
               id={1}
            />
            <Produto
               id={10}
            />
            <Produto
               id={7}
            />
            <Produto
               id={8}
            />
         </div>
      </div>
   )




}