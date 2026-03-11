import.meta.env


const apiUrl = import.meta.env.VITE_API_URL

export async function ApiStartWars(){
    
    try{
        const llamada=await fetch(`${apiUrl}/all.json`)
        const respuesta= await llamada.json()
        return respuesta
    }
    catch(error){
        console.log(error)
    }
}