
var map = L.map('mapid');

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1IjoiaHlwZXJraW5kIiwiYSI6ImNpbTV4cTNkeDAxd3h1Mm00cmVlM242dzgifQ.z3qbberA-XEQkuZQdbDMVA',
    continuousWorld: false, 
    noWrap: true
}).addTo(map);
newMarkerGroup = L.LayerGroup();
map.on('click', addMarker);


//accesses location services to find spot on the map
//"you are here"
function onLocationFound(e) {
    var radius = e.accuracy / 2;
    console.log(e.latlng);
    // L.marker(e.latlng).addTo(map)
        // .bindPopup("You are within " + radius + " meters from this point").openPopup();
    L.circle(e.latlng, radius).addTo(map)
        .bindPopup("Your Location").openPopup();
}


function onLocationError(e) {
    alert(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

map.locate({
  setView: true, 
  maxZoom: 16,
});


function addMarker(e){
    // Add marker to map at click location; add popup window
  var newMarker = 
  new L.marker(e.latlng,{
    clickable: true,
    draggable: true,
    riseOnHover: true,
    riseOffset: 100
    }).addTo(map);
  // console.log(newMarker);
  newMarker.on('dragend', function(event){
    var changePos = event.target.getLatLng();
    console.log(changePos);
  });
  var popup = 
    L.popup({
      maxWidth: 300,
      minWidth: 200, 
      maxHeight: 400,
      autoPan: true,
      closeButton: true,
      offset: L.point(1000, 500)
    })
    .setLatLng(e.latlng)
    .setContent('<h2>Add Event</h2>' + 
                '<form>' +
                  '<input type="text" name="title" placeholder="Title">' +
                  '<input type="text" name="location" placeholder="Location">' +
                  '<input type="text" name="date" placeholder="Date">' +
                  '<input type="text" name="time" placeholder="Time">' +
                  '<input type="text" name="description" placeholder="Event Description">' +
                '</form>' +
                '<button>Delete</button>' +
                '<button action="index" method="POST">ADD</button>');
    console.log(map);
  newMarker.bindPopup(popup);
  
}



