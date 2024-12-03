export default class Carrito {
    constructor() {
        this.productos = [];
    }

    //agregar "un Producto" al carrito con Producto,Cantidad,Precio.
    agregarProducto(Nombre, Cantidad, Precio) {
        this.productos.push(new Producto(Nombre, Cantidad, Precio ));
        //Guardar en el LocalStorage
    } 

    //borrarProducto
    borrarProcuto(index) {
        this.productos.splice(index, 1);
        //Guardar en el LocalStorage
    };

    //editarProducto
    editarProducto(index,newCantidad) {
        this.productos[index].Cantidad = newCantidad;
        //Guardar en el LocalStorage
    };
    
    //calcular total del carrito
    calcularTotal() {
        return this.productos.reduce((total,producto) => {total+= producto.calcularTotales()},0);
        //Guardar en el LocalStorage
    };
    
    //extra --------------LocalStorage---------------

    guardarLocalStorage() {
        //Guardar en el LocalStorage
        localStorage.setItem('carrito', JSON.stringify(this.productos));
    }
    
    cargarLocalStorage() {
        // this.productos = JSON.parse(localStorage.getItem('carrito')) || [];  

        const carrito = JSON.parse(localStorage.getItem('carrito'));
        if(carrito) {
            this.productos = carrito.map((producto) =>new Produto(producto.nombre, producto.cantidad,producto.precio));
        }
    }

    ordenarPorNombre() {
        this.productos.sort((a, b) => a.Nombre.localeCompare(b.Nombre));
        //Guardar en el LocalStorage
    }
    
    ordenarPorPrecio() {
        this.productos.sort((a, b) => a.calcularTotales() - b.calcularTotales());
        //Guardar en el LocalStorage
    }

};