//traer la data desde la api con un getData



export async function getDataPrices (urlData) {
    const response = await fetch(urlData);
    if(!response.ok){
        throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;

}

