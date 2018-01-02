var initMap= function() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -12.0463731, lng: -77.042754},
          zoom: 10
        });
	
	      var map2 = new google.maps.Map(document.getElementById('map2'), {
          center: {lat:-12.0393264,lng: -77.0433712},
          zoom: 13
        });
	      
	      var marker = new google.maps.Marker({
					position: {lat:-12.0393264,lng: -77.0433712},
					map:map2,
					icon: '../assets/images/mapfood-pin.png'
				});
	      
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('FoodMap just found you');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }