// pages/Personajes/Personajes.jsx
import { useState } from "react";
import PersonajeLeyenda from "../../components/personajeLeyenda/PersonajeLeyenda";
import Header from "../../components/header/header";
import Buscar from '../../components/buscar/Buscar';
import "./Personajes.css";

export default function Personajes(){
    const [searchQuery, setSearchQuery] = useState("");

    return(
        <div>
            <Header/>
            <Buscar onSearch={setSearchQuery} />

            <div className="personajes-personajesPages">
                <h1 className="h-personajesPages">Personajes</h1>
                <p className="p-personajesPages">Esta es la página de personajes</p>
                <div className="component-personajePage">
                    <PersonajeLeyenda searchQuery={searchQuery} />
                </div>
            </div>
        </div>
    )
}