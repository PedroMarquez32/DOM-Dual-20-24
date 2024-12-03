export class Producto {
    constructor(nombre,cantidad,precio){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.id = Math.random().toString(36).substr(2, 9); // Genera un ID único para cada producto
    }

    //Metodos publicos obtenerInfo

    calcularTotales(){
        return `Total: $${this.precio * this.cantidad}`;
    }

    obtenerInfo(){
        return `Producto: ${this.nombre}, Cantidad: ${this.cantidad}, Precio: ${this.precio}, Total: ${this.calcularTotales()}`;
}

}