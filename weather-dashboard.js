var searchFormEl = document.querySelector("#search-label");
var citiesContainer = document.querySelector("#cities-container");
var locationEntryEl = document.querySelector("#location");
var mapContainerEl = document.querySelector("#map-container");
var mapSearchTerm = document.querySelector("#map-search-term");

var formSubmissionPiece = function(event) {
//prevent page from refreshing
event.preventDefault();

//get value from location input
var locationEntry = locationEntryEl.value.trim();

if (location) {
    getLocationInfo(location);

    //clear content
    mapContainerEl.textContent = "";
    locationEntryEl.value = "";
} else {
    alert("Please enter a location");
}


}

// var submitClickAction = function(event) {
//     //getting the city attribue from clicked element
//     var cities = event.target.getAttribute("cities-container")
// }

var getLocations = function(local) {
    //format the weather api url
    var weatherApiUrl = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key" + local;


//make a get request to the url
fetch(getLocations) 
.then(function(response)  {
    //request was successful
    if (response.ok) {
    console.log(response);
    response.json().then(function(data) {
        console.log(data);
        showLocation(data, user);
    });
    } else {
        alert('Error: location information not found');
    }
    })
    .catch(function(error) {
        alert('Unable to load site')
    });
};
    var showLocation = function(locals, localSearch) {
        //check if api returned any locations
        if (locals.length === 0) {
            mapContainerEl.textContent = 'No cities found';
        } return;
  

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


