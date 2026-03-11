import './Header.css'
import { Link } from "react-router-dom"

export default function Header(){

    return(
        <header>
            <div className="header-container">

                <h1 className="title-header">Bienvenido a StarWars</h1>

                <ul className="menu-header">
                    <li><Link to="/home">Inicio</Link></li>
                    <li><Link to="/personajes">Personajes</Link></li>
                    <li><Link to="/naves">Naves</Link></li>
                </ul>
            </div>
        </header>
    )
}