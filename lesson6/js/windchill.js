var high = parseInt(document.getElementById("hightemp").innerHTML);
var low = 44;
var windSpeed = parseInt(document.getElementById("windspeed").innerHTML);


var aveTemp = ((high + low) / 2);
var s = (Math.pow(windSpeed, 0.16));
var windchill = 35.74 + (0.6215 * aveTemp) - (35.75 * s) +	(0.4275 * aveTemp * s);

windchill = Math.round(windchill) + "&deg;F";

document.getElementById("windchill").innerHTML = windchill;