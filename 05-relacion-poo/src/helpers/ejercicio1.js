function Tarea (nombre) {
    //propiedades estaticas
    Tarea.contador = 1;
    //propiedades privadas
    //propiedades publicas
    this.id = Tarea.contador++
    this.nombre = nombre;
    this.completada = false;
};

//metodos públicos
this.toggleCompletada = function (completada) {
    this.completada = completada;
};

//metodo privado
function logEstado (id) {
    console.log(`Tarea ${id} cambiada a ${this.completada ? 'completa' : 'incompleta'}`);
}

//Crear una propiedad estatica del objeto
//Que lo tengan todas las instancias
Tarea.prototype.info = function () {
    return `Tarea ${this.id}: ${this.nombre} - Completada: ${this.completada}`;
};