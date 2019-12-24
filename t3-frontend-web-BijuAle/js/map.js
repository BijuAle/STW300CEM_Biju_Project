//Populate marker object
var markers;
function getMarkers() {
  base_url = "http://localhost:3000/";
  $.ajax({
    type: "GET",
    url: base_url + "markers",
    success: function(markers_) {
      markers = markers_;
      initMap();
    },
    error: function() {
      alert("Something went wrong!");
    }
  });
}

//Initialize Google Map
function initMap() {
  var options = { zoom: 13, center: { lat: 27.7107544, lng: 85.3292317 } };
  var map = new google.maps.Map(document.getElementById("map"), options);

  //Add eahc marker on map
  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  function addMarker(props) {
    var coords = { lat: props.lat, lng: props.lng };
    var marker = new google.maps.Marker({
      position: coords,
      map: map
      //icon:props.iconImage                                g
    });

    //Add Marker Info Window
    if (props.markerInfo) {
      var infoWindow = new google.maps.InfoWindow({
        content: "<h3>" + props.markerInfo + "</h3>"
      });
      marker.addListener("click", function() {
        infoWindow.open(map, marker);
      });
    }
  }
}
