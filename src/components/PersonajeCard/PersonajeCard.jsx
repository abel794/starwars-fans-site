import { useInView } from 'react-intersection-observer';
import './PersonajeCard.css'; // Aquí pondremos los estilos

export default function PersonajeCard({ personaje }) {
  const {
    name,
    species,
    gender,
    homeworld,
    height,
    mass,
    masters,
    affiliations,
    image
  } = personaje;

  
  const { ref, inView } = useInView({
    threshold: 0.2,       
    triggerOnce: true,     
  });

  return (
    <article
      ref={ref}
      className={`card-personaje scroll-reveal ${inView ? 'visible' : ''}`}
    >
      <div className="card-imagen">
        <img src={image} alt={name} />
      </div>

      <div className="card-contenido">
        <h3>{name}</h3>
        <p>👤 {species} | {gender}</p>
        <p>🪐 {homeworld}</p>
        <p>📏 {height} m</p>
        <p>⚖️ {mass} kg</p>

        {masters?.length > 0 && (
          <p>🧙 {masters[0]}</p>
        )}

        {affiliations?.length > 0 && (
          <p>⚔ {affiliations[0]}</p>
        )}
      </div>
    </article>
  );
}