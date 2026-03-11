export function generarHistoria(p){

  const maestros = p.masters?.join(", ") || "maestros desconocidos"

  const aprendices = p.apprentices?.join(", ") || "ninguno conocido"

  const afiliaciones = p.affiliations?.slice(0,3).join(", ")

  return `${p.name} fue un ${p.species} originario de ${p.homeworld}.
  
  Nacido en el año ${Math.abs(p.born)} BBY, fue entrenado por ${maestros}.
  
  Durante su vida entrenó a ${aprendices}.
  
  Formó parte de organizaciones como ${afiliaciones}.
  
  Finalmente murió en ${p.diedLocation || "un lugar desconocido"}.
  `
}