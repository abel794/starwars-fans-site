import "./ModalPersonaje.css"
import { generarHistoria } from "../../hooks/genrationHistori"

export default function ModalPersonaje({ personaje, cerrar }) {

  if (!personaje) return null

  return (
    <div className="modal-overlay" onClick={cerrar}>
        <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            
            <div className="modal-content">
            {/* Imagen a la izquierda */}
            <div className="modal-imagen">
                <img 
                src={personaje.image || "/placeholder.png"} 
                alt={personaje.name || "Personaje desconocido" } 
                onError={(e)=> e.target.src="/imagenes/placeholder.png"} 
                />
            </div>

            {/* Texto a la derecha */}
            <div className="modal-texto">
                <h2>{personaje.name}</h2>

                <p><span className="icon">👤</span> <strong>Especie:</strong> {personaje.species}</p>
                <p><span className="icon">🏠</span> <strong>Planeta:</strong> {personaje.homeworld}</p>
                <p><span className="icon">📏</span> <strong>Altura:</strong> {personaje.height} m</p>
                <p><span className="icon">⚖️</span> <strong>Peso:</strong> {personaje.mass} kg</p>

                <h3><span className="icon">📖</span> Leyenda</h3>
                <p>{generarHistoria(personaje)}</p>

                <button onClick={cerrar}>Cerrar</button>
            </div>
            </div>

        </div>
        </div>
  )
}