function convertKtoC(){
    var temperatureK = document.getElementById("temperatureK").value;
    var temperatureC = temperatureK - 273.15;
    return document.getElementById("temperatureC").value = temperatureC;
}
function convertCtoK() {
    var temperatureC = document.getElementById("temperatureC").value;
    var temperatureK = temperatureC + 273.15;
    return document.getElementById("temperatureK").value = temperatureC;
}