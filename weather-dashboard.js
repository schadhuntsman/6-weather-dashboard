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
           document.getElementById('cityName').textContent = data.name + "(" + (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + ")";

           document.getElementById('wind').textContent = 
           data;

           console.log(data.wind);

         
        }) 
        .catch(function (error) {
            alert('Unable to load site')
        });
       
       
 
    
        
        var forecastApiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=38.7267&lon=-9.1403&exclude=current,hourly,minutely,alerts&units=metric&appid=34e427a196fd7b57ef7effa0b02aee0c&units=imperial'
        
        forecastApiUrl = forecastApiUrl + 
        // make a get request to the url
        fetch(forecastApiUrl)
            .then(function (response5Day) {
                //request was successful               
                    
                    return response5Day.json();
            }
            )
                    .then(function (dataForecast) { 
                        
                        //json is the response from api
                        console.log(dataForecast);                   
                        // //get the city name   
                        // date = new Date(data.dt * 1000)                          
              // document.getElementById('date1').textContent = 
        // data.main
        
        
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
}
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