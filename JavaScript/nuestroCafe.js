// FETCH
Swal.fire(
    'En esta sección tenemos algo especial',
    'Revisa el final de esta pagina!',
    'info'
  )

fetch ("https://pokeapi.co/api/v2/pokemon/bulbasaur")
.then(responde => responde.json() )
.then(data =>{

    let element = document.getElementById("pokemon1")
    element.innerHTML = `
    <img class= "pokeimg" src= '${data.sprites.front_default}'/>
    <p>Nombre: ${data.name}</p>
    <p>Pokedex Núm: ${data.game_indices[9].game_index}</p>
    <p>Tipo: Veneno</p>
    <button id=pokemon1 class= "boton1" > Seleccionar </button>
    `;

    let boton1 = document.getElementById("pokemon1")
    boton1.onclick = () => 
    {Swal.fire(
    "Bulbasaur! 🌿",
    "Felicidades por tu nuevo compañero!",
    "success");}
   
    console.log(data)
})
.catch(err=>console.log())

fetch ("https://pokeapi.co/api/v2/pokemon/charmander")
.then(responde => responde.json() )
.then(data =>{

    let element = document.getElementById("pokemon2")
    element.innerHTML = `
    <img class= "pokeimg" src= '${data.sprites.front_default}'/>
    <p>Nombre: ${data.name}</p>
    <p>Pokedex Núm: ${data.game_indices[9].game_index}</p>
    <p>Tipo: Fuego</p>
    <button id=pokemon2 class= "boton2" > Seleccionar </button>
    
    `;
    let boton2 = document.getElementById("pokemon2")
    boton2.onclick = () => 
    {Swal.fire(
        "Charmander! 🔥",
        "Felicidades por tu nuevo compañero!",
        "success");}

    console.log(data)
})
.catch(err=>console.log())


fetch ("https://pokeapi.co/api/v2/pokemon/squirtle")
.then(responde => responde.json() )
.then(data =>{

    let element = document.getElementById("pokemon3")
    element.innerHTML = `
    <img class= "pokeimg" src= '${data.sprites.front_default}'/>
    <p>Nombre: ${data.name}</p>
    <p>Pokedex Núm: ${data.game_indices[9].game_index}</p>
    <p>Tipo: Agua</p>
    <button id=pokemon3 class= "boton3" > Seleccionar </button>
    `;

    let boton3 = document.getElementById("pokemon3")
    boton3.onclick = () => 
    {Swal.fire(
    "Squirtle! 💧",
    "Felicidades por tu nuevo compañero!",
    "success");}
    console.log(data)
})
.catch(err=>console.log())




