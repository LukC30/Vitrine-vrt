import Header from "../components/header"
import Carrossel from "../components/MainComponents/carrossel"
import Produto from '../components/card'

export default function Main(){




return(
 <div>
    <Header/>
    <Carrossel/>
    <div className="">
      <h3>Recomendaçoes</h3>
      <Produto/>
   </div>
    
    
 </div>
)




}