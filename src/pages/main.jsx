import Header from "../components/header"
import Carrossel from "../components/MainComponents/carrossel"
import Produto from '../components/card.jsx'
import Teste from '../components/teste'
export default function Main() {




   return (
      <div>
         <Header />

         <h3 style={{ textAlign: "center" }}>Recomendaçoes</h3>
         <div style={{display: "flex", flexDirection: "row", alignItens:'center'}}>
            <Produto
               id={8}
            />
            <Produto
               id={1}
            />
            <Produto
               id={2}
            />
            <Produto
               id={3}
            />
            <Produto
               id={4}
            />
         </div>
      </div>
   )




}