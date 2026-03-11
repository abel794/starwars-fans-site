import Header from "../../components/Header/Header"
import Personaje from "../../components/CardPersonaje/Personaje"
import Historia from "../../components/Historias/Historia"
import Footer from '../../components/Footer/Footer'
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