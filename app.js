const lugar = require('./lugar/lugar'); // para poder importar funcion desde lugar.js con el path 
const clima = require('./clima/clima');

//aqui abajo obtenemos la direccion gracias a yargs
const argv = require('yargs').options({ // yargs ofrece opcion de poner comandos directamente en raiz de la app 
    direccion: {
        alias: 'd',
        desc: 'Direcciónd e la ciudad para obtener el clima',
        demand: true
    }
}).argv; //para obtener los argumntos

//argv.direccion
// lugar.getLugarLatLng(argv.direccion) // esto me regresa una promesa por la funcion ASYNC de lugar.js
//     .then(console.log);
// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {

        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion } es de ${ temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }

}



getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);