function initMap() {
  var center = {
    lat: 68.95647,
    lng: 33.058251
  };

  var point = {
    lat: 68.95575741,
    lng: 33.06416093
  };

  var map = new google.maps.Map(document.getElementById("google-map"), {
    zoom: 15,
    center: center,
    scrollwheel: false,
    styles: [
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
          {
            color: "#16c2aa"
          },
          {
            visibility: "on"
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
          {
            visibility: "on"
          },
          {
            color: "#737373"
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [
          {
            visibility: "on"
          },
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [
          {
            visibility: "on"
          },
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
          {
            visibility: "on"
          },
          {
            color: "#bdb9b9"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#696969"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            visibility: "on"
          },
          {
            color: "#b3b3b3"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#d6d6d6"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#d6d6d6"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "geometry.fill",
        stylers: [
          {
            visibility: "on"
          },
          {
            color: "#d6d6d6"
          },
          {
            weight: 1.8
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#d6d6d6"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            color: "#808080"
          },
          {
            visibility: "on"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#16c2aa"
          }
        ]
      }
    ]
  });

  var marker = new google.maps.Marker({
    position: point,
    map: map,
    draggable: false,
    icon: {
      url: "assets/images/svg/map_marker.svg",
      size: new google.maps.Size(30, 40),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(15, 40),
      scaledSize: new google.maps.Size(30, 40),
      fillColor: "#16c2aa",
      fillOpacity: 1
    }
  });
  marker.setMap(map);
}

google.maps.event.addDomListener(window, "load", initMap);
