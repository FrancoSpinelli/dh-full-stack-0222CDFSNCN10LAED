const fs = require("fs");

let tareasJSON = fs.readFileSync(__dirname + "/tareas.json", "utf-8");
let tareas = JSON.parse(tareasJSON);

let funcionesDeTareas = {
    listar: () => {
        for (let i = 0; i < tareas.length; i++) {
            console.log("• Tarea " + (i + 1) + ": " + tareas[i].titulo + ". Estado: " + tareas[i].estado);
        }
    }
}

module.exports = funcionesDeTareas;