//Getting Date
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
  return formattedDate + ", " + hours + ":" + minutes; // Removed the extra '+' after minutes and formatted the string correctly
}

//Changing the Weather
//Adding Current Temperature
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
}
//The API Call/Integration
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

//Changing the City Name
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#cityInput");
  let cityElement = document.querySelector("#cityName");
  cityElement.innerHTML = searchInput.value;
  //alert(searchInput.value);
  searchCity(searchInput.value);
}

//The Search Function
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

//function searchForecast() {
//console.log("functionworks!");
//let city = document.getElementById("cityInput").value;
//// Get the API for Axios
//}
//function startTheProcess() {
// Get the value of the input
//const city = input.value;
// Change the h1 text to the input value
//cityName.textContent = city;
// Clear the input field
//input.value = "";
//}
//function getForecast(city) {
//let apiKey = "ad47941082ao90b750fat7b2f455c3f0";
//let apiUrl =
//"https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric";
//axios.get(apiUrl).then(weeklyForecast);
//}
//const form = document.querySelector("form");
//const input = document.getElementById("cityInput");
//const cityName = document.getElementById("cityName");
