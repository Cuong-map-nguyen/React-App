const url = "http://api.openweathermap.org/data/2.5/find?units=metric&appid=01cc37655736835b0b75f2b395737694&q=";

function getTemp(cityName){
    return fetch(url + cityName)
    .then(res => res.json())
    .then(resJSon => resJSon.list[0].main.temp);
}

export default getTemp;
// cách test
// getTemp("saigon").then(temp => console.log(temp)).catch(er => console.log(er));