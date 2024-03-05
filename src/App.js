import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/main.jsx";
import Cad from "./pages/cadastro.jsx"
import Produto from "./pages/produto.jsx";

const App = () => {

  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Main}/>
          <Route path="/cad" Component={Cad}/>
          <Route path="/prod/:id" Component={Produto}/>
        </Routes>
      </BrowserRouter>


  )


}

export default App;