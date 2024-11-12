//Seleccion de elementos del DOM
const appDiv = document.getElementById('app');

appDiv.innerText = "Hola Mundo";
appDiv.innerHTML = "<h1>Hola Mundo</h1>";

//Añadir clases a un elemento del DOM
appDiv.classList.add("clase1","clase2");

//Seleccion de ClassName
const items = document.getElementsByClassName("items");
//items.length;
let n = 0;
for(const i of items){
    i.textContent = `Hola amigo ${++n}`;
    i.innerContent = `Hola amigo ${++n}`;
}

// seleccion por clase
const saludoP = document.querySelector(".saludo");
// traer todos por clase
const saludos = document.querySelectorAll(".saludo");

saludos.forEach((saludo, index) => {
    saludo.innerText = `Hola mundo ${index}`;
});

//añadimos atributos a una etiqueta
//<img src="imagen.jpg alt=imagen>"

const img = document.getElementById("github")
miGit.setAttribute("tarfet", "_blank")
//miGit.removeAttribute("targer");
miGit.innerText = `Ir a mi Github`;
miGit.textContent = "Ir a mi Github";
