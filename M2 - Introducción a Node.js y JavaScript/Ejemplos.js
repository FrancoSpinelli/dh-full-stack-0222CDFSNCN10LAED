// EJEMPLO DE FOR - FOREACH - FILTER

let personas = [
    {
        nombre: 'Franco',
        apellido: 'Spinelli',
        edad: 23.
    },
    {
        nombre: 'Juan',
        apellido: 'Gonzales',
        edad: 16.
    },
    {
        nombre: 'Ignacio',
        apellido: 'Perez',
        edad: 21,
    },
    {
        nombre: 'Lucía',
        apellido: 'Caceres',
        edad: 12,
    },
];

function listarMenoresFor(personas) {
    let listadoDeMenores = [];
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].edad < 18) {
            listadoDeMenores.push(personas[i]);
        }
    }
    return listadoDeMenores;
}

function listarMenoresForEach(personas) {
    let listadoDeMenores = [];
    personas.forEach(persona => {
        if (persona.edad < 18) {
            listadoDeMenores.push(persona);
        }
    })
    return listadoDeMenores;
}

function listarMenoresFilter(personas) {
    let listadoDeMenores = personas.filter(persona => {
        return persona.edad < 18
    });
    return listadoDeMenores;
}

console.log("For: ", listarMenoresFor(personas));
console.log("ForEach: ", listarMenoresForEach(personas));
console.log("Filter: ", listarMenoresFilter(personas));