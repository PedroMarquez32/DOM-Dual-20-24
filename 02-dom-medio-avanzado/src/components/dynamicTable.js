//Dado un array de objtos con datos de usuarios nombre edad y email crear una tabla dinamicamente en la que cada fila corresponda a un usuario.
    //Añade funcionalidad para ordendar las filas por nombre o edad haciendo click en las cabezeras de las columnas.

    //Segunda parte utilizando la lista de usuarios añadir un input para que ha medida que busquemos filtren los usuarios por su nombre.


   /**
    * Data de EJEMPLO con nombre edad y email
    * {nombre: "Juan", edad: 25, email: "juan@juanes.com},
    * {nombre: "Ana", edad: 25, email: "ana@gmail.com"},
    * {nombre: "Pedro", edad: 25, email: "pedro@gmail.com}"
    *  
    */ 
    
const dynamicTable = ({ data, headers}) => {
    //Creamos la tabla
    const table = document.createElement('table');
    table.id = 'table-data-users';
    table.style.border = 1;
    
    //Creamos la cabecera de la tabla thead
    const thead = document.createElement('thead');

    //Creamos las filas de la cabecera
    const headerRow = document.createElement('tr');

    
    //Creamos las columnas de la cabecera con un for each
    headers.forEach(header => {
        //creamos cada th
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
        
        //Añadimos un evento de click para ordenar la columna

    });
    thead.appendChild(headerRow);

        //Creamos el tbody
    const tbody = document.createElement('tbody');
    //limpiamos la tabla.
    tbody.innerHTML = '';
    //Recorremos los datos
    data.forEach(user => {
        //Creamos cada fila
        const trUser = document.createElement('tr');
        //Recorremos los valores de cada usuario
        // trUser.innerHTML= `
        // <td>${user.nombre}</td>
        // <td>${user.edad}</td>
        // <td>${user.email}</td>`;

        //Si quiero utilizar un bucle para recorrer las propiedades de cada objeto
        //inyectamos las tr al tBody
        tbody.appendChild(trUser);
        
    });

    //Añadimos los elementos al tbody y thead
    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
    
};

    

    

export default dynamicTable