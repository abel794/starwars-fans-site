import { section } from "framer-motion/client";
import "./historia.css"

export default function Historia(){
    return(
        <section>
            <div className="historia-container">
                <h1 className="titulo-historia">Star Wars</h1>
                <p className="texto-historia">
                    Star Wars, conocida también en español como La guerra de las galaxias, 
                    es una franquicia de medios de fantasía compuesta primordialmente de una 
                    serie de películas concebidas por el cineasta estadounidense George Lucas 
                    en la década de 1970, y producidas y distribuidas inicialmente por 
                    20th Century Fox y posteriormente por The Walt Disney Company a partir de 2012. 
                    Su trama describe las vivencias de un grupo de personajes que habitan en una 
                    galaxia ficticia e interactúan con elementos como «la Fuerza», un campo de energía 
                    metafísico y omnipresente que posee un «lado luminoso» impulsado por la sabiduría, 
                    la nobleza y la justicia y utilizado por los Jedi, y un «lado oscuro» usado por los Sith 
                    y provocado por la ira, el miedo, el odio y la desesperación.
                </p>
            </div>
        </section>
    )
}
