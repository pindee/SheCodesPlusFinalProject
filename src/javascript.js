//Getting Date Do Not Touch
function formatDate(date) {
  let day = date.getDay(); // Changed the variable name to 'day' to avoid duplicate declaration
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formattedDate = days[day]; // Changed the variable name to 'formattedDate' to avoid confusion
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let meridian = "am";
  if (hours > 12) {
    hours = hours - "12";
    meridian = "pm";
  }
  return formattedDate + ", " + hours + ":" + minutes + meridian; // Removed the extra '+' after minutes and formatted the string correctly
}

//Changing the Weather Do Not Touch
//Adding Current Temperature Do Not Touch
function UpdateWeather(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector(".current-temp");
  //Fix City Name
  let cityElement = document.querySelector("#cityName");
  cityElement.innerHTML = response.data.city;
  //Temperature
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  console.log(response.data);
  //Fix Description
  let descriptionElement = document.querySelector("#Current-weather-condition");
  descriptionElement.innerHTML = response.data.condition.description;
  //Fix Humidity
  let humidityElement = document.querySelector("#current-humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
  //Fix Wind
  let windElement = document.querySelector("#current-windSpeed");
  windElement.innerHTML = response.data.wind.speed;
  //Fix Date and Time
  let date = new Date(response.data.time * 1000);
  let timeElement = document.querySelector("#time");
  timeElement.innerHTML = formatDate(date);
  //Change Current Icon
  let icon = document.querySelector("#weather-cond");
  icon.innerHTML =
    "<img class='main-emoji' src='" + response.data.condition.icon_url + "'/>";

  //Forecast
  let forecastDay1 = document.querySelector("#day1");
  forecastDay1.innerHTML = displayForecast(date);
}
//The API Call/Integration Do Not Touch
function searchCity(city) {
  let apiKey = "1abte8c00a79ddf038b756348o47c6af";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=" +
    city +
    "&key=" +
    apiKey +
    "&units=metric";
  console.log(apiUrl);
  axios.get(apiUrl).then(UpdateWeather);
}

//Changing the City Name Do Not Touch
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#cityInput");
  let cityElement = document.querySelector("#cityName");
  cityElement.innerHTML = searchInput.value;
  //alert(searchInput.value);
  searchCity(searchInput.value);
}
//Forecast work - Week 8 WHERE I LEFT OFF - So Far, IT WORKS F*** YEAH!
function displayForecast(){
  let forecast = document.querySelector("#forecastWeather");
  let days = ["Wed", "Thu", "Fri", "Sat", "Sun"];
  forecastHTML = "";
  days.forEach(function (day) {
forecastHTML = forecastHTML +
  '<li>\
  <p class="day">' +
  day +
  '</p>\
  <p class="emoji">☁️</p>\
  <p class="temp">\
    <span class="mintemp">-15</span>°C\
    <span class="maxtemp">-2</span>°C\
  </p>\
</li>';
  })
  forecast.innerHTML = forecastHTML;
}

//Everything to be run on start
//The Search Function Do Not Touch
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
displayForecast();


