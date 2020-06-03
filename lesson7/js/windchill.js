var high = parseFloat(document.getElementById("hightemp").innerHTML);
var low = 44;
var windSpeed = parseFloat(document.getElementById("windspeed").innerHTML);


let aveTemp = ((high + low) / 2);
let s = (Math.pow(windSpeed, 0.16));
let windchill = 35.74 + (0.6215 * aveTemp) - (35.75 * s) + (0.4275 * aveTemp * s);

windchill = Math.round(windchill) + "&deg;F";

if ((windSpeed > 4.8) && (high <= 50)) {
    document.getElementById("windchill").innerHTML = windchill;
} else {
    document.getElementById("windchill").innerHTML = "N/A"
}