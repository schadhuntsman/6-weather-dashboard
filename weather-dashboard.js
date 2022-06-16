var searchFormEl = document.querySelector("#search-label");
var citiesContainer = document.querySelector("#cities-container");
var locationEntryEl = document.querySelector("#location");
var mapContainerEl = document.querySelector("#map-container");
var mapSearchTerm = document.querySelector("#map-search-term");


var formSubmissionPiece = function (event) {
    //prevent page from refreshing
    event.preventDefault();
    // console.log(event);
    //get value from location input
    var location = locationEntryEl.value.trim();

    if (location) {
        getLocations(location);

        //clear content
        mapContainerEl.textContent = "";
        locationEntryEl.value = "";
    } else {
        alert("Please enter a location");
    }

}

var submitClickAction = function (event) {
    //getting the city attribue from clicked element
    var local = event.target.getAttribute("cities-container")
    // console.log(event);
    // console.log(local);
};

var getLocations = function (location) {
    // format the weather api
    var weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' 
    + location + '&appid=34e427a196fd7b57ef7effa0b02aee0c&units=imperial'

    // make a get request to the url
    fetch(weatherApiUrl)
        .then(function (response) {
            //request was successful               
                
                return response.json();
        }
        )
                .then(function (data) { 
                    
                    //json is the response from api
                    console.log(data);                   
                    //get the city name   
                    date = new Date(data.dt * 1000)                          
           document.getElementById('cityName').textContent = data.name
            + "(" + (date.getMonth()+1) + "/" + date.getDate() 
            + "/" + date.getFullYear() + ")";

           document.getElementById('wind').textContent = 
           data.wind.speed + " mph";

           console.log(data);

           document.getElementById('temp').textContent = 
           data.main.temp + "°F";

        //    console.log(data.wind.speed);

        //    document.getElementById('humidity').textContent = 
        //    data.main.humidity

        //    console.log(data.main.humidity);

        //    document.getElementById('uvIndex').textContent = 
        //    data.main.uvi;

        //    console.log(data.main.uvi);

         
        }) 
        .catch(function (error) {
            alert('Unable to load site')
        });
       
       
    }
    
        
        var forecastApiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=38.7267&lon=-9.1403&exclude=current,hourly,minutely,alerts&units=imperial&appid=34e427a196fd7b57ef7effa0b02aee0c";

        // forecastApiUrl = forecastApiUrl + 
        // // make a get request to the url
        fetch(forecastApiUrl)
        .then(function (responseForc) {
            //request was successful               
                
                return responseForc.json();
        }
        )
                .then(function (dataForecast) {

                    document.getElementById('date1')
                    .textContent = dataForecast.daily.dt0
                    console.log(dataForecast);
        const forecast = document.getElementById('forecast')
        ;
        forecast[0].classList.add(searchFormEl);
                var forecastDay = "";
                dataForecast.daily.forEach((value, index) => {
                    if (index > 0) {
                        
                        var date1 = document.getElementById('cardDay1');
                        var date2 = document.getElementById('cardDay2');
                        var date3 = document.getElementById('cardDay3');
                        var date4 = document.getElementById('cardDay4');
                        var date5 = document.getElementById('cardDay5');
                       
                        // document.getElementById('wind').textContent = 
                        // data.wind.speed + " mph";
                       
                        document.date1.textContent = 
                        dataForecast.list + "it's wokring"
                        
                        document.date1.textContent = forecastDay.dataForecast
                    console.log(dataForecast);
                        date1 = new Date(value.dt * 1000).toLocaleDateString("en", {
                            weekday: 'long',
                        });
                        var weatherIcon = value.weather[0].weatherIcon;
                        var forcastTemp = value.forcastTemp.day.toFixed(0);
                        forecastDay = `<div class="forecast">
                                        <h5>${date1}</h5>
                                        <p><span class="ico-${icon}" title=${icon}"></span><p>
                                        <div class="forecast-day--temp">${temp}<sup>°F</sup></div>
					</div>`;
					forecast[0].insertAdjacentHTML('beforeend', forecastDay); console.log(dataForecast);
                    }       
                })      
 });             
                

//show popular cities!!! -- put under here



var showLocation = function (locals, localSearch) {
    //check if api returned any locations
    if (locals.length === 0) {
        mapContainerEl.textContent = 'No cities found';
        return;
    }

    mapSearchTerm.textContent = localSearch;

    //create container
    var mapEl = document.createElement('div');
    mapEl.classList = "flex-row justify-space-between align-center list-item";

    //create a span to hold city name
    var mapTitle = document.createElement('span');
    mapTitle.textContent = cityName;

    //append to container
    mapEl.appendChild(mapTitle);


};

//add listeners to forms
searchFormEl.addEventListener('submit', formSubmissionPiece);
console.log(searchFormEl);

//cut fetch logic
    // fetch('https://api.openweathermap.org/data/2.5/weather?q=' + local.value + 
    // '&appid=34e427a196fd7b57ef7effa0b02aee0c')

    // .then(response => response.json())
    // .then(data = console.log(data))

    // .catch(function(error) {
    //             alert('Unable to load site')