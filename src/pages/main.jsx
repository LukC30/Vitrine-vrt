import Header from "../components/header"
import Carrossel from "../components/MainComponents/carrossel"
import Produto from '../components/card'

export default function Main(){




return(
 <div>
    <Header/>
    <Carrossel/>
    
      <h3 style={{textAlign: "center"}}>Recomendaçoes</h3>
      <br/>
   <div className="d-flex">
      <Produto/>
      <Produto/>
      <Produto/>
      <Produto/>
      <Produto/>
      
   </div>
    
    
 </div>
)




}