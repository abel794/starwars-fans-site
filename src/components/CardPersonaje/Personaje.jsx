import { usePersonajes } from "../../hooks/usePersonajes";
import PersonajeCard from "../PersonajeCard/PersonajeCard";
import "./Personaje.css";

export default function Personaje() {
  const { personajes, loading, error } = usePersonajes();

  if (loading) {
    return (
      <section className="container-card" aria-label="Cargando personajes">
        <div className="loading-spinner">Cargando...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container-card" aria-label="Error al cargar personajes">
        <p className="error-message" role="alert">
          Error: {error.message || "No se pudieron cargar los personajes"}
        </p>
      </section>
    );
  }

  if (!personajes?.length) {
    return (
      <section className="container-card" aria-label="Sin personajes">
        <p className="empty-message">No hay personajes para mostrar.</p>
      </section>
    );
  }

  return (
    <section className="container-card" aria-label="Lista de personajes">
      {personajes.map((personaje, index) => (
        <PersonajeCard
          key={personaje.id}
          personaje={personaje}
          reverse={index % 2 === 1} // mantiene la alternancia visual
        />
      ))}
    </section>
  );
}
