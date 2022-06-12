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

};

// var submitClickAction = function(event) {
//     //getting the city attribue from clicked element
//     var cities = event.target.getAttribute("cities-container")
// }

var getLocations = function(local) {
    //format the weather api url
    var weatherApiUrl = ""
}