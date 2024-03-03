import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/main.jsx";



const App = () => {

  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Main}/>
        </Routes>
      </BrowserRouter>


  )


}

export default App;