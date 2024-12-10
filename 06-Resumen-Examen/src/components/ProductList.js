// PRODUCTLIST.JS
export class ProductList {
    #products = [];
    #apiurl;
    constructor(apiurl) {
        this.#apiurl = apiurl;
        //donde renderizar
        this.appContainer = document.getElementById('app');
    }

    async init(){
        try {
            this.#products = await this.#fetchDataProducts();
            this.renderProducts();
        } catch (error) {
            this.renderError(error);
        }
    }

    //Metodo privado para obtener los productos con un FetchData
    async #fetchDataProducts() {
        try {
            const response = await fetch(this.#apiurl);
            if (!response.ok) {
                throw new Error('Error en la petición');
            }
            return await response.json();
        } catch (error) {
            throw new Error("Error fetch data", error);
        }
    }

    //Metodo público para obtener los productos
    renderProducts(){
        if(this.#products.length === 0 ){
            this.renderError("No hay productos");
        }
        const productsHTML = this.#products.map(product => {
            return `
            <div class="product">
                <h2>${product.name}</h2>
                <p>Precio: ${product.price}</p>
                <p>Description: ${product.description}</p>
                <p class="category">${product.category}</p>
                <button class="toggle-color-btn">Toggle Color</button>
            </div>`;
        }).join("");
        
        this.appContainer.innerHTML = `
        <div class="product-list">
            ${productsHTML}
        </div>
        `;

        // Añadir evento de clic a los botones
        const buttons = this.appContainer.querySelectorAll('.toggle-color-btn');
        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                const categoryElement = event.target.previousElementSibling;
                if (categoryElement.style.color === 'green') {
                    categoryElement.style.color = '';
                } else {
                    categoryElement.style.color = 'green';
                }
            });
        });
    }
    

    //Metodo para renderizar los errores
    renderError(message) {
        this.appContainer.innerHTML = `
        <div class="error" >
        <p>Error: ${message}</p>
        </div>`;
    }

    //metodo para (post,patch,delete,put) productos 
    async #opFetchProductData(product, method) {
        try {
            let response;
            switch (method) {
                case 'POST':
                    response = await fetch(this.#apiurl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    });
                    break;
                case 'PATCH':
                    response = await fetch(`${this.#apiurl}/${product.id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    });
                    break;
                case 'DELETE':
                    response = await fetch(`${this.#apiurl}/${product.id}`, {
                        method: 'DELETE'
                    });
                    break;
                case 'PUT':
                    response = await fetch(`${this.#apiurl}/${product.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    });
                    break;
                default:
                    throw new Error('Método no soportado');
            }

            if (!response.ok) {
                throw new Error('Error en la petición');
            }

            return await response.json();
        } catch (error) {
            throw new Error(`Error en la operación ${method}: ${error.message}`);
        }
    }
}