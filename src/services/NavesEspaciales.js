import.meta.env

const ApiUrlNaves = import.meta.env.VITE_API_URL2
// services/NavesEspaciales.js
export const NavesEspaciales = async () => {
  let url = `${ApiUrlNaves}`
  let todasNaves = []

  try {
    while (url) {
      const res = await fetch(url)
      const data = await res.json()
      todasNaves = [...todasNaves, ...data.results]
      url = data.next // si hay página siguiente
    }
    return todasNaves
  } catch (e) {
    console.log("Error al traer naves:", e)
    return []
  }
}