// Initialize my own map
var map = L.map('crimeMap').setView([37.755432, -122.429865], 12);

// Initialize the basemap
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);

// Use jQuery to grab Greg's SF crime data and add it to the map using a new point icon
jQuery.getJSON("https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/f94237ceb15208e985207e7f3d48e292d330a6fa/Web%20Development%20Module/Unit%201%20-%20GitHub%20and%20Leaflet/sf_crime.geojson",function(data) {
  var crimeIcon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Basic_red_dot.png',
    iconSize: [10,10]
  });
  L.geoJson(data,{
    pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: crimeIcon});
    }
  }  ).addTo(map);
});
