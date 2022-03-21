let funcionesDeTareas = require('./FuncionesDeTareas');

const argumento = process.argv[2];

switch (argumento) {
    case "listar":
        funcionesDeTareas.listar();
        break
    case 'crear':
        let nuevaTarea = {
            titulo: process.argv[3],
            estado: process.argv[4],
        }
        funcionesDeTareas.guardarTarea(nuevaTarea);
        break;
    case 'filtrar':
        let estadoAFiltrar = process.argv[3];
        funcionesDeTareas.filtrarPorEstado(estadoAFiltrar);
        break
    case undefined:
        console.log("Tienes que pasar una acción");
        break;
    default:
        console.log("No entendí que queres hacer");
        break;
}