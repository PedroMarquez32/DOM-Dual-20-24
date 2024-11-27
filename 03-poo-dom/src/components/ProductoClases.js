export class ProductoClases {
    static currentId = 1; // Variable estática para IDs autoincrementales
  
    constructor(nombre, precio, stock, imagen) {
      this.id = ProductoClases.currentId++; // ID autoincremental
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
      this.imagen = imagen;
    }
  
    // Método para obtener información del producto
    obtenerInformacion() {
      return `ID: ${this.id}, Producto: ${this.nombre}, Precio: $${this.precio.toFixed(2)}, Stock: ${this.stock}`;
    }
  
    // Método para actualizar el stock
    actualizarStock(cantidad) {
      if (this.stock >= cantidad) {
        this.stock -= cantidad;
        return `Stock actualizado. Stock restante: ${this.stock}`;
      } else {
        return 'Stock insuficiente';
      }
    }
  }
  