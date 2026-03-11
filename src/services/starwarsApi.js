import.meta.env

const ApiUrlPersonajes=import.meta.env.VITE_API_URL3

const ApiUrlPersonajesImagens=import.meta.env.VITE_API_URL4
export async function getCharacters(){

    try{

        const response = await fetch(`${ApiUrlPersonajes}`)
        const data = await response.json()

        // agregar imagen a cada personaje
        const characters = data.results.map((char, index) => {

            const id = index + 1

            return{
                name: char.name,
                gender: char.gender,
                birth: char.birth_year,
                image: `${ApiUrlPersonajesImagens}${id}.jpg`
            }

        })

        return characters

    }catch(error){
        console.log(error)
    }

}