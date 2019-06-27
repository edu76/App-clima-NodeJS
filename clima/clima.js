const axios = require('axios');

const getClima = async(lat, lng) => { // creamos funcion 
    // no se configura headers por el APIkey  com ola lat y log varian entonces los recibimos arriba en el getClima 
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&APPID=d836acaeeb746a4bf5d6b4da72302dc9&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}