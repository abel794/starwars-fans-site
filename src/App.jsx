import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Personajes from "./pages/personajes/Personajes.jsx";
import Naves from'./pages/naves/Naves.jsx'
import Login from "./pages/Auth/login/Login.jsx";

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/personajes" element={<Personajes/>}/>
        <Route path="/Naves" element={<Naves/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
