let time = new Date()
var bg = document.getElementsByTagName('div');
var bgg = bg[0];//first div of body i.e. container 
var images = document.getElementsByTagName('img');
var image = images[1]; // gets the image tag containing the image of weather

if (time.getHours() >= 18 ) {
    image.src = "moon.png";     
} 
else if (time.getHours() <= 6) {
    image.src="moon.png"
}
else if (time.getHours() <= 18) {
    image.src="sun.webp"
}
else if (time.getHours() >= 6) {
    image.src="sun.webp"
}




// Weather API


let searchbox=document.querySelector(".search_bar input")
let searchbtn=document.querySelector(".search_bar button")


async function GetWeather(city) {
    const apiKey = "91c7ac56859ee6d9b622a21b53fbef2f"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`

    const data = await fetch(`${apiUrl}`).then
        (response => response.json());

    document.querySelector(".place").innerHTML=data.name
    document.querySelector(".weather_status").innerHTML=data.weather[0].description
    document.querySelector(".displayDegreeTemp").textContent=Math.ceil(data.main.temp)
    
    
    const weather_check = data.weather[0].description

    if ((weather_check == "clear sky") && (time.getHours() >= 18 && time.getHours() <= 6)) {
        image.src = "moon.png";
 
    }
    else if (weather_check == "overcast clouds") {
        image.src = "cloud.png";

    }
    else if (weather_check == "scattered clouds") {
        image.src = "cloud.png";

}
    else if (weather_check == "broken clouds") {
        image.src = "cloud.png";

}
    else if (weather_check == "light rain") {
        image.src = "rain.png";
}
    else if (weather_check == "thunderstorm with light rain") {
        image.src = "thunder.png";
}
    else if (weather_check == "thunderstorm") {
        image.src = "thunder.png";
}


}
searchbtn.addEventListener("click", () => {
    GetWeather(searchbox.value)
})

