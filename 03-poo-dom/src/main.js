// import { Usuario } from "./components/Usuario";
// import { UsuarioClases } from "./components/UsuarioClases";


// //Creo una instancia de usuario

// //const usuario = new Usuario("Juan", "Perez", "juan.perez@gmail.com", "123456");
// const usuario = new UsuarioClases("Ana", "Lucia", "juan.perez@gmail.com", "123456");

// const app = document.getElementById("app");
// app.innerHTML = `
// <h2>Gestion de Usuarios</h2>
// <p>${usuario.getInfo()}</p>
// <button id="btn-login"> Iniciar sesión </button>
// <button id="btn-actualizar-email"> Actualizar Email </button>
// <div id="form-container></div>
// `;

// //Gestionamos los eventos.

// document.getElementById("btn-login")
//         .addEventListener("click", mostrarFormularioLogin);
        
// document.getElementById("btn-actualizar-email")
//         .addEventListener("click", mostrarFormularioActualizarEmail);


// function mostrarFormularioLogin() {
//     const formContainer = document.getElementById("form-container");
//     formContainer.innerHTML = `
//     <input id="email-login" type="email" placeholder="Introduzca el email" />
//     <input id="password-login" type="password" placeholder="Introduzca la contraseña" />
//     <button id="btn-enviar-login">Enviar</button>
//     `;
// };

// const mostrarFormularioUpdateEmail = () => {
//     const formContainer = document.getElementById("form-container");
//     formContainer.innerHTML = `
//     <input id="new-email" type="email" placeholder="Introduzca el nuevo email" />
//     <button id="btn-actualizar-email-submit">Actualizar</button>
//     `;
//     document
//     .getElementById("btn-actualizar-email")
//     .addEventListener("click", () => {
//         const newEmail = document.getElementById("nuevo-email").value.trim;
//         alert(usuario.updateEmail(newEmail));
//     });
// };


// document.getElementById("btn-enviar-login"
//     .addEventListener("click", () => {
//         const email = document.getElementById("email-login").value;
//         const password = document.getElementById("password-login").value;
//         alert(usuario.login(email,password));
//     })
// );


//Implementar una funcion constructora que modele un producto del producto queremos saber el nombre el precio el stock la imagen,
//Los metodos que quiero son obtener informacion del producto y actualizar stock pasandole como parametro una cantidad siempre que haya stock suficiente
//Genera un array de productos renderizalos en el DOM añade un boton a cada producto que permita actualizar el stock
//Aplicar 2 de las 3 formas posibles de creacion de objetos.

import { Producto } from "./Producto.js";
import { ProductoClases } from "./ProductoClases.js";

// Crear un array de productos usando ambas formas de creación
const productos = [
  new Producto("Camiseta", 19.99, 10, "https://via.placeholder.com/150"),
  new ProductoClases("Pantalones", 39.99, 5, "https://via.placeholder.com/150"),
  new Producto("Zapatos", 59.99, 3, "https://via.placeholder.com/150"),
  new ProductoClases("Gorra", 14.99, 20, "https://via.placeholder.com/150"),
];

// Renderizar productos en el DOM
const app = document.getElementById("app");
app.innerHTML = `
  <h2>Gestión de Productos</h2>
  <div id="product-list"></div>
`;

const productList = document.getElementById("product-list");

productos.forEach((producto, index) => {
  const productDiv = document.createElement("div");
  productDiv.style.border = "1px solid #ccc";
  productDiv.style.padding = "10px";
  productDiv.style.margin = "10px";
  productDiv.style.textAlign = "center";

  const img = document.createElement("img");
  img.src = producto.imagen;
  img.alt = producto.nombre;
  img.style.width = "100px";
  img.style.height = "100px";

  const name = document.createElement("h2");
  name.textContent = producto.nombre;

  const price = document.createElement("p");
  price.textContent = `Precio: $${producto.precio.toFixed(2)}`;

  const stock = document.createElement("p");
  stock.textContent = `Stock: ${producto.stock}`;
  stock.id = `stock-${index}`;

  const button = document.createElement("button");
  button.textContent = "Actualizar Stock";
  button.onclick = () => {
    const cantidad = parseInt(prompt("Ingrese la cantidad a reducir:"), 10);
    if (!isNaN(cantidad) && cantidad > 0) {
      const mensaje = producto.actualizarStock(cantidad);
      alert(mensaje);
      document.getElementById(`stock-${index}`).textContent = `Stock: ${producto.stock}`;
    } else {
      alert("Cantidad no válida");
    }
  };

  productDiv.appendChild(img);
  productDiv.appendChild(name);
  productDiv.appendChild(price);
  productDiv.appendChild(stock);
  productDiv.appendChild(button);
  productList.appendChild(productDiv);
});




//Segundo ejercicio: Sistema bancario
//Implementar una clase llamada cuentaBancaria que tenga una propiedad privada llamada saldo y que me permita depositar una cantidad y retirar una cantidad
//Genera en el DOM dos contenedores uno para ingresar y otro para mostrar la informacion del saldo que tenemos disponible el ingresar o retirar se hará con un radio-button
// Una lista para selecionar un contenedor y otro aplicado a dos formas

