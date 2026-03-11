import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Personajes from "./pages/Personajes/Personajes";
import Naves from'./pages/Naves/Naves'
import Login from "./pages/Auth/login/Login";

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