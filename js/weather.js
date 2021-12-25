const API_KEY = "2478e226c32e3c9fee640f852a572e89";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("you live in", lat, lon);
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}/ ${data.main.temp}°C`;
    });
}
function onGeoError() {
  alert("내 위치 확인을 허용해 주십시오.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
