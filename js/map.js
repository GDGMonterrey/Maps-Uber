var map;

function initMap () {
	var latLng = new google.maps.LatLng(25.657797, -100.366795);
	map = new google.maps.Map(document.getElementById('map'), {
	  center: latLng,
	  zoom: 15
	});
}