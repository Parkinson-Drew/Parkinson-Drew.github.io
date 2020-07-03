

//preston page banner
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
getTownEventsAPI('https://byui-cit230.github.io/weather/data/towndata.json', 'Preston');