var searchFormEl = document.querySelector("#search-label");
var citiesContainer = document.querySelector("#cities-container");
var locationEntryEl = document.querySelector("#location");
var mapContainerEl = document.querySelector("#map-container");
var mapSearchTerm = document.querySelector("#map-search-term");

var formSubmissionPiece = function (event) {
    //prevent page from refreshing
    event.preventDefault();
    console.log(event);
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
    console.log(event);
    console.log(local);
};

var getLocations = function (local) {
    // format the weather api
    var weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' 
    + searchFormEl.value + '&appid=34e427a196fd7b57ef7effa0b02aee0c'

    // make a get request to the url
    fetch(weatherApiUrl)
        .then(function (response) {
            //request was successful
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    showLocation(data, local);
                });
            } else {
                alert('Error: location information not found');
            }
        })
        .catch(function (error) {
            alert('Unable to load site')
        });
        
};


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