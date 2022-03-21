const fs = require("fs");

const pathJSON = __dirname + "/tareas.json";



let funcionesDeTareas = {

    leerJSON: function() {
        let tareasJSON = fs.readFileSync(pathJSON, "utf-8");
        let tareas = JSON.parse(tareasJSON);
        return tareas;
    },

    escribirJSON: function(tareas){
        let tareasJSON = JSON.stringify(tareas, null, 4);
        fs.writeFileSync(pathJSON, tareasJSON, "utf-8");
    },

    listar: function() {
        let tareas = this.leerJSON();
        tareas.forEach((tarea, i) => {
            console.log("• Tarea " + (i + 1) + ": " + tarea.titulo + ". Estado: " + tarea.estado);
        });
    },
    
    guardarTarea: function (nuevaTarea) {
        let tareas = this.leerJSON();
        tareas.push(nuevaTarea);
        this.escribirJSON(tareas);
        console.log("Nueva tarea creada: " + nuevaTarea.titulo + ". Estado: " + nuevaTarea.estado);
        return nuevaTarea;
    },

    filtrarPorEstado: function (estadoAFiltrar) {
        let tareas = this.leerJSON();
        let acumulador = [];
        tareas.forEach(tarea => {
            if (tarea.estado === estadoAFiltrar) {
                acumulador.push(tarea);
            };
        });
        console.log(acumulador);
        return acumulador;
    },

}

module.exports = funcionesDeTareas;