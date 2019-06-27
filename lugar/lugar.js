//Creamos objeto de axios 
// creamos constante = importando el axios
const axios = require('axios');

// desarrollo funcion que me permita reutilizar ste codigo despues 
const getLugarLatLng = async(dir) => {

        const encodedUrl = encodeURI(dir);

        // Instancia de la petición
        const instance = axios.create({
            baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`, // aqui le doy el valor a la ciudad que escriba en mi app 
            //timeout: 1000, lo suprimo ya que no lo necesito
            headers: { 'X-RapidAPI-Key': 'f1062b2420msh7ce969140d71eadp1b2f82jsn178a6187dd25' }
        });

        const resp = await instance.get(); //  trae la inform y la almacena en respuesta

        // verificamos si mi respuesta tiene datos como cero y eso puede disparar un error entonces:
        if (resp.data.Results.length === 0) { // si es igual a cero entonces no existe direccion
            throw new Error(`No hay resultados para ${ dir }`);
        }
        // si lo logra hacer entonces debo extaerlo con la direccion, latitd y longitud
        const data = resp.data.Results[0];
        const direccion = data.name;
        const lat = data.lat;
        const lng = data.lon;

        return {
            direccion, // gracias a ecmas6 me va a acrear una propiedad direccion con el valor que tiene la variable direccion 
            lat,
            lng
        }
    }
    // para poder usar esto fuera del este archivo debo hacer un modulo.exports
module.exports = {
    getLugarLatLng
}