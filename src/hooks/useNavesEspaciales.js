// hooks/useNavesEspaciales.js
import { useState, useEffect } from "react"
import { NavesEspaciales } from "../services/NavesEspaciales"

export default function useNavesEspaciales() {
  const [naves, setNaves] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchNaves() {
      try {
        const data = await NavesEspaciales()
        setNaves(data)
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    }

    fetchNaves()
  }, [])

  return { naves, loading, error }
}