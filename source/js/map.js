function initMap() {
        var uluru = {lat: 34.8544438, lng: -111.8301579};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5.75,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }