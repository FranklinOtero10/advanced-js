
/**
 * 
 * @param {HTMLDivElement} element
 */

export const enviromentsComponent = (element) =>{

    console.log(import.meta.env);

    const html = `
        Dev: ${ import.meta.env.DEV} <br/>
        APIKEY: ${ import.meta.env.VITE_API_KEY} <br/>
        BASE: ${ import.meta.env.VITE_BASE_URL} <br/>
    `;
    element.innerHTML = html;
}