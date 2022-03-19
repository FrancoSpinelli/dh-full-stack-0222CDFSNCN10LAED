let deportista = {
    nombre: 'Mariano',
    energia: 100,
    experiencia : 50,
    entrenarHoras : function entrenarHoras(cantidaddehoras) {
        this.energia -= cantidaddehoras*5 
        this.experiencia += cantidaddehoras*2
        return "actualizado"
    }
}

console.log(deportista.entrenarHoras(5));
console.log(deportista);

