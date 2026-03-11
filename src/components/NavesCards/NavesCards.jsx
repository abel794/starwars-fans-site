import useNavesEspaciales from '../../hooks/useNavesEspaciales'
import './NavesCards.css'

export default function NavesCards() {
  const { naves, error, loading } = useNavesEspaciales()

  if (loading) return <p>Cargando naves...</p>
  if (error) return <p>Error al cargar naves</p>

  return (
    <section className="naves-container">
      {naves.map((nave, index) => (
        <div key={index} className="card-naves">
          {/* Nombre grande de la nave */}
          <h2 className="nave-title">{nave.name}</h2>

          {/* Link a Google Images */}
          <p className='enlace-p'>
            🌐 <a 
                  href={`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(nave.name)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='enlace'
               >
               Ver imágenes
               </a>
          </p>

          {/* Datos de la nave */}
          <div className="nave-datos">
            <p>🚀 <strong>Modelo:</strong> {nave.model}</p>
            <p>🏭 <strong>Fabricante:</strong> {nave.manufacturer}</p>
            <p>💰 <strong>Costo:</strong> {nave.cost_in_credits} créditos</p>
            <p>👨‍✈️ <strong>Crew:</strong> {nave.crew}</p>
            <p>🧳 <strong>Pasajeros:</strong> {nave.passengers}</p>
          </div>
        </div>
      ))}
    </section>
  )
}