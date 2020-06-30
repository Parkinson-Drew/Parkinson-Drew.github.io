

//preston page
let d = new Date()
const banner = document.getElementById('banner');
if(d.getDay() == 5){
  banner.style.display = 'block';
}
else{
  banner.style.display = 'none';
}

getCurrentCityWeatherAPI('https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=8d52f67922af141683a343c685850f05&units=imperial');
get5DayCityWeatherAPI('https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=8d52f67922af141683a343c685850f05&units=imperial');

function getCurrentCityWeatherAPI(apiURL){
  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // declare constants to hold element values
    const windchill = document.getElementById("windchill");
    const high = document.getElementById("hightemp");
    const low = document.getElementById("low");
    const windspeed = document.getElementById("windspeed");
    const humidity = document.getElementById('humidity');
    const current = document.getElementById('current');

    // set variables to obtain weather api data
    let setCurrent = jsObject['weather'][0]['description'];
    let setHigh = jsObject['main']['temp_max'];
    let setWindSpeed = jsObject['wind']['speed'];
    let setLow = jsObject['main']['temp_min'];
    let setHumidity = jsObject['main']['humidity'];

    // check if variables have values before trying to set innerhtml values
    if (windchill) {windchill.innerHTML = getWindchill(setWindSpeed, (setHigh+setLow)/2);}
    if (high) {high.innerHTML = setHigh;}
    if (windspeed) {windspeed.innerHTML = setWindSpeed;}
    if (humidity) {humidity.innerHTML = setHumidity;}
    if (current) {current.innerHTML = setCurrent;}
  });
}

function get5DayCityWeatherAPI(apiURL){
    fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // Filtering
        const fiveDaysForecast = jsObject.list.filter(element => element.dt_txt.includes('18:00:00'));
        let index = 0;

        fiveDaysForecast.forEach(forecast => {
            console.log(forecast);
            var date = new Date(forecast.dt_txt);
            var day = date.toString();
            day = day.slice(0,3)
    
            let card = document.createElement('section');
            let dayOfWeek = document.createElement('p');
            dayOfWeek.textContent = day;
            card.appendChild(dayOfWeek);
    
            let img = document.createElement('img')
            const imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
            img.setAttribute('src', imagesrc);
            img.setAttribute('alt', forecast.weather[0].main);
            card.appendChild(img);
    
            let forecastHigh = document.createElement('span');
            forecastHigh.textContent = forecast.main.temp.toFixed(1) + " °F";
            card.appendChild(forecastHigh);
    
            document.querySelector('div.forecast').appendChild(card);
            index++;      
    
        });

      });
}