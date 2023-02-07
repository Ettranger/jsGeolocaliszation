
document.getElementById("geolocate-btn").addEventListener("click", function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        document.getElementById("text").style.display = "block";
        document.getElementById("longitude").style.display = "block";
        document.getElementById("lattitude").style.display = "block";
        document.getElementById("longitude").textContent = lat;
        document.getElementById("lattitude").textContent = lng;


      });
    } else {
      // Le navigateur ne prend pas en charge la géolocalisation
    }
  });
