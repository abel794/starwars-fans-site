// services/imagenesNaves.js
export const imagenesNaves = async () => {

    imagenesNaves ={
        "CR90 corvette": "https://starwars-visualguide.com/assets/img/starships/2.jpg",
        "Star Destroyer": "hhttps://www.google.com/imgres?q=Star%20Destroyer&imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fstarwars%2Fimages%2F7%2F76%2FTheFinalizer-TLJVehiclesShips.png%2Frevision%2Flatest%3Fcb%3D20240401044947&imgrefurl=https%3A%2F%2Fstarwars.fandom.com%2Fwiki%2FResurgent-class_Star_Destroyer&docid=4xJKc3PU7BY3oM&tbnid=PMI7ibj7k3AtwM&vet=12ahUKEwjNw_uc8ZOTAxWmRzABHReUHKMQnPAOegQIFRAB..i&w=2360&h=1530&hcb=2&ved=2ahUKEwjNw_uc8ZOTAxWmRzABHReUHKMQnPAOegQIFRAB",
        "Sentinel-class landing craft": "https://starwars-visualguide.com/assets/img/starships/5.jpg",
        "Death Star": "https://starwars-visualguide.com/assets/img/starships/9.jpg",
        "Millennium Falcon": "https://starwars-visualguide.com/assets/img/starships/10.jpg",
        "Y-wing": "https://starwars-visualguide.com/assets/img/starships/11.jpg",
        "X-wing": "https://starwars-visualguide.com/assets/img/starships/12.jpg",
        "TIE Advanced x1": "https://starwars-visualguide.com/assets/img/starships/13.jpg",
        "Executor": "https://starwars-visualguide.com/assets/img/starships/15.jpg",
        "Rebel transport": "https://starwars-visualguide.com/assets/img/starships/17.jpg"
    }

    const traerImagen = await fetch(`${imagenesNaves.value}`)

}
