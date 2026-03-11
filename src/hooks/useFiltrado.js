// hooks/useFiltrado.js
import { useMemo } from "react";

export default function useFiltrado(listaInicial, query = "") {
  const filtrados = useMemo(() => {
    if (!query) return listaInicial;
    return listaInicial.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [listaInicial, query]);

  return { filtrados };
}