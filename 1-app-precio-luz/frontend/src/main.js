import { createSpinner } from "./components/spinner/spinner";
import { createLoadButton } from "./components/loadButton/loadButton.js";
import { getDataPrices } from "./helpers/getDataPrices.js";


const urlData = import.meta.env.VITE_HOUR_PRICES;

console.log(await getDataPrices(urlData));
const handleClick = () => {
    
};



document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const loadPricesBtn = createLoadButton();
    app.appendChild(loadPricesBtn);

    loadPricesBtn.addEventListener("click", handleClick);

});

/**
 *  const app = document.getElementById("app");
    const spinner = createSpinner();
    app.appendChild(spinner);
 * 
 */