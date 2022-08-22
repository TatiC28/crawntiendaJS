const URL = 'js/stock.JSON'

fetch (URL)
    .then (res => res.json ())
    .then ( stock => {console.log ( stock [1].nombre)})