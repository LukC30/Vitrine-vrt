import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/main.jsx";
import Cad from "./pages/cadastro.jsx"
import Produto from "./pages/produto.jsx";
import Carrinho from "./pages/carrinho.jsx";

const App = () => {

  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Main}/>
          <Route path="/cad" Component={Cad}/>
          <Route path="/prod/:id" Component={Produto}/>
          <Route path="/carrinho/" Component={Carrinho}/>
        </Routes>
      </BrowserRouter>


  )


}

export default App;