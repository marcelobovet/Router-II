export async function getPokemons() {
  const apiurl = "https://pokeapi.co/api/v2/pokemon-form/?offset=1&limit=150";

  try {
    const reponse = await fetch(apiurl);
    const data = await reponse.json();
    return data;
  } catch {
    alert("Hubo un problema con la peticion de datos");
  }
}

export async function getPokemonsName(name) {
  const apiurl = `https://pokeapi.co/api/v2/pokemon-form/${name}`;

  try {
    const reponse = await fetch(apiurl);
    const data = await reponse.json();
    return data;
  } catch {
    alert("Hubo un problema con la peticion de datos");
  }
}
