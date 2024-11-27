let currentId = 1; 

export function Producto(nombre, precio, stock, imagen) {
  this.id = currentId++; 
  this.precio = precio;
  this.stock = stock;
  this.imagen = imagen;


  this.obtenerInformacion = function () {
    return `ID: ${this.id}, Producto: ${this.nombre}, Precio: $${this.precio.toFixed(2)}, Stock: ${this.stock}`;
  };


  this.actualizarStock = function (cantidad) {
    if (this.stock >= cantidad) {
      this.stock -= cantidad;
      return `Stock actualizado. Stock restante: ${this.stock}`;
    } else {
      return 'Stock insuficiente';
    }
  };
}
