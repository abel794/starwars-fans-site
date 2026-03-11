// components/personajeLeyenda/personajeLeyenda.jsx
import ModalPersonaje from "./ModalPersonaje";
import { usePersonajesLeyenda } from '../../hooks/usePersonajesLeyenda';
import useFiltrado from "../../hooks/useFiltrado";
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './personajeLeyenda.css';

export default function PersonajeLeyenda({ searchQuery }) {

    const {ref, inView}=useInView({
        threshold : 0.2,
        triggerOnce : true
    });

    const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);
    const { personajesIconico, error, loading } = usePersonajesLeyenda();

    const { filtrados } = useFiltrado(personajesIconico, searchQuery);

    if (loading) return <p>Cargando personajes...</p>;
    if (error) return <p>Error al cargar personajes</p>;

    return (
        <div className={`personajesLeyenda-container }`}>
            {filtrados.map((personaje) => (
                <div
                    key={personaje.id}
                    className="personaje-card"
                    onClick={() => setPersonajeSeleccionado(personaje)}
                >
                    <div className='personajeLeyenda-imagen'>
                        <img src={personaje.image || "/placeholder.png"} alt={personaje.name || "Personaje desconocido"} />
                    </div>
                    <h2 className='personajeLeyenda-title'>{personaje.name}</h2>
                </div>
            ))}

            <ModalPersonaje
                personaje={personajeSeleccionado}
                cerrar={() => setPersonajeSeleccionado(null)}
            />
        </div>
    );
}