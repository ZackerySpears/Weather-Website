(function(){
    getWeatherInfo();
})();

//Function to connect to the Dark Sky API and get weather data 
function getWeatherInfo() {
    //https://api.darksky.net/forecast/96fe91ebc48b78588708f02067be3361/37.8267,-122.4233
    //Base-URL/APIKey/Latitude,Logitude

    $.ajax("https://api.darksky.net/forecast/"+ darkSkyKey + "/37.8267,-122.4233", {dataType: "jsonp" })
    .done(function(data) {
        console.log(data);
    })
    .fail(function(error){
        console.log(error);
    })
    .always(function(){
        console.log("Weather call complete!");
    })
}

//Function to connect to the Mapquest Geocoding API and get geocoding data
function geoCode() {

}