import { useEffect, useState } from "react";
import { ApiStartWars } from "../services/llamarApi";

export const usePersonajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const iconicos = [
    "Luke Skywalker",
    "Darth Vader",
    "Leia Organa",
    "Han Solo",
    "Yoda",
    "Obi-Wan Kenobi",
    "R2-D2",
    "C-3PO"
  ];

  useEffect(() => {
    const cargarPersonajes = async () => {
      try {
        setLoading(true);
        const data = await ApiStartWars();
        const filtrados = data.filter(persona =>
          iconicos.includes(persona.name)
        );
        setPersonajes(filtrados);
        setError(null);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    cargarPersonajes();
  }, []);

  return { personajes, loading, error };
};