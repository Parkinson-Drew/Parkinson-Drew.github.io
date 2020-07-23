function getWindchill(windSpeed, temperature){
    if (windSpeed > 4.8 && temperature <= 50){
        let s = Math.pow(windSpeed, 0.16);
        let t = temperature;
        let myCalc = 35.74 + (0.6215 * t) - (35.75 * s) + (0.4275 * t * s);
        return myCalc.toFixed(0);
      }
      else {
        return "N/A";
      }    
}