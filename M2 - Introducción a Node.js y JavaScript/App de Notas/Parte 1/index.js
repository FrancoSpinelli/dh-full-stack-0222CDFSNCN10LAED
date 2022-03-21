let funcionesDeTareas = require('./FuncionesDeTareas');

const argumento = process.argv[2]

switch (argumento) {
    case "listar":
        funcionesDeTareas.listar();
        break
    case undefined:
        console.log("Tienes que pasar una acción");
        break;
    default:
        console.log("No entendí que queres hacer");
        break;
}

