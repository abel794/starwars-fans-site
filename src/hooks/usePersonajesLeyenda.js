import { ApiStartWars } from "../services/llamarApi"
import { useState, useEffect } from "react"

export const usePersonajesLeyenda = () => {

    const [personajesIconico, setPersonajesIconico] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const cargarPersonajes = async () => {

            try{

                const personajes = await ApiStartWars()

                setPersonajesIconico(personajes)

            }
            catch(e){

                setError(e)

            }
            finally{

                setLoading(false)

            }

        }

        cargarPersonajes()

    },[])

    return { personajesIconico, error, loading }

}