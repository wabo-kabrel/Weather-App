const apiKey = "dc0d1bc538ad9ffabb8857ceb5095dae";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city){  //An async function is a regular JavaScript function that has been transformed into an asynchronous function using the async keyword. The purpose of async is to simplify the syntax necessary to consume promise-based APIs.
    const response= await fetch(apiUrl + city + `&appid=${apiKey}`);


    if(response.status == 404){    //404 is the default symbol for an error message
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
    }
    else{

        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";   //math.round to round up/down the temp to the nearest whole number
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
else if(data.weather[0].main == "Clear"){
    weatherIcon.src= "images/clear.png";
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src= "images/rain.png";
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src="images/drizzle.png";
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src="images/mist.png";
}

document.querySelector(".weather").style.display ="block"
document.querySelector(".error").style.display = "none";

    }

    
}
searchBtn.addEventListener("click", ()=>{
checkWeather(searchBox.value);} )
