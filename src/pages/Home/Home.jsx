import Header from '../../components/Header/Header.jsx'
import Personaje from "../../components/CardPersonaje/Personaje.jsx"
import Historia from "../../components/Historias/Historia.jsx"
import Footer from '../../components/Footer/Footer.jsx'
import './Home.css'

export default function Home() {

    return(
        <div>
            <Header/>
            <Historia />
            <section className="personajes-home">
                <h2>Personajes Icónicos de la Saga</h2>
                <Personaje/>
            </section>
            <Footer />
            
        </div>
    )
}