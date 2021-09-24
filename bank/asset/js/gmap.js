/**
*
* -----------------------------------------------------------------------------
*
*
* -----------------------------------------------------------------------------
*
**/

// gmap init
function initialize() {
    var mapCanvas = document.getElementById('g-map');
    var myCenter = new google.maps.LatLng('10.7745031,76.6555099');
    var mapOptions = {center: myCenter, zoom: 8, scrollwheel: false, mapTypeId: google.maps.MapTypeId.ROADMAP};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);