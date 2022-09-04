function myMap() {
  // give the location of the SIT building
  var location = {lat: -33.8882368, lng: 151.1939855};  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: location
  });

  // Marker Icon on Google maps
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

// REFERENCE for google api 
// https://developers.google.com/maps/documentation/javascript/adding-a-google-map
