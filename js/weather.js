const API_KEY = "c4c4ead8c63cfb08461096394bd8f5ab";

function onSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        const name = document.querySelector("#weather span:first-child")
        const weather = document.querySelector("#weather span:nth-child(2)")
        const temp = document.querySelector("#weather span:nth-child(3)")
        name.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = data.main.temp;
    })
}

function onError(){

}

navigator.geolocation.getCurrentPosition(onSuccess,onError)