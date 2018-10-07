function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
    mapTypeId:google.maps.MapTypeId.SATELLITE
    });
  
    var bounds = {
      north: 60.0000,
      south: 25.0000,
      east: -70.0000,
      west: 70.0000
    };
  
    // Display the area between the location southWest and northEast.
    map.fitBounds(bounds);
  
    // Add 5 markers to map at random locations.
    // For each of these markers, give them a title with their index, and when
    // they are clicked they should open an infowindow with text from a secret
    // message.
    var lngSpan = bounds.east - bounds.west;
    var latSpan = bounds.north - bounds.south;
    
    var locations = [
       ['TXstate', 29.888,-97.938, 'I am currently working at Texas State University'],
       ['UTK', 35.961,-83.921, 'I graduated from the University of Tennessee Knoxville in 2015'],
       ['Tianshan', 43.802,83.333, 'I have been studying glacier changes in the Central Tian Shan'],
       ['Urumqi', 43.826,87.617, 'I was born and raised in Urumqi'],
       ['BNU', 39.962,116.366, 'I received my bachelor\'s degree in Geosciences from Beijing Normal University'],
       ['SDSU', 44.311,96.798, 'I worked at South Dakota State University during 2016-2018']
    ];
    
    for (var i = 0; i < locations.length; ++i) {
      var marker = new google.maps.Marker({
        position: {
          lat: locations[i][1],
          lng: locations[i][2]
        },
        map: map
      });
      attachSecretMessage(marker, locations[i][3]);
    }
  }
  
  // Attaches an info window to a marker with the provided message. When the
  // marker is clicked, the info window will open with the secret message.
  function attachSecretMessage(marker, secretMessage) {
    var infowindow = new google.maps.InfoWindow({
      content: secretMessage
    });
  
    marker.addListener('click', function() {
      infowindow.open(marker.get('map'), marker);
    });
  }