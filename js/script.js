// Form Toggle
$(document).ready(function(){
    $('.toggle-btn').on('click', function(){

        $('.enquire-now-form').toggleClass('out')

    });
});
 
 
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".enquire-now-form").addClass("out");
    } else {
        $(".enquire-now-form").removeClass("out");
    }
});




$(document).ready(function(){
	$('.recruiter-slider').slick({
		pauseOnFocus:false,
		pauseOnHover:false,
		autoplay:true,
		arrows:true,
		infinite: true,
		rows: 1,
		mobileFirst: true,
        dots: false,
        slidesToShow: 1,
		slidesToScroll: 1,
	});
  });
 
 
 
 // Google Map
 // When the window has finished loading create our google map below
 google.maps.event.addDomListener(window, "load", init);
  
 function init() {
   // Basic options for a simple Google Map
   // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
   var mapOptions = {
     // How zoomed in you want the map to start at (always required)
     zoom: 14,

     // The latitude and longitude to center the map (always required)
     center: new google.maps.LatLng(28.5685808, 77.313783, 10),

     // How you would like to style the map.
     // This is where you would paste any style found on Snazzy Maps.
     styles: [
 {
     "featureType": "administrative",
     "elementType": "labels.text.fill",
     "stylers": [
         {
             "color": "#00426a"
         },
         {
             "saturation": "-75"
         },
         {
             "lightness": "30"
         }
     ]
 },
 {
     "featureType": "landscape",
     "elementType": "labels.text.fill",
     "stylers": [
         {
             "color": "#00426a"
         },
         {
             "saturation": "-27"
         },
         {
             "lightness": "22"
         }
     ]
 },
 {
     "featureType": "landscape.man_made",
     "elementType": "all",
     "stylers": [
         {
             "visibility": "off"
         }
     ]
 },
 {
     "featureType": "landscape.natural",
     "elementType": "geometry.fill",
     "stylers": [
         {
             "color": "#0076a8"
         },
         {
             "lightness": "90"
         },
         {
             "saturation": "-80"
         },
         {
             "gamma": "1.00"
         }
     ]
 },
 {
     "featureType": "poi",
     "elementType": "all",
     "stylers": [
         {
             "visibility": "off"
         }
     ]
 },
 {
     "featureType": "road",
     "elementType": "geometry.stroke",
     "stylers": [
         {
             "visibility": "off"
         }
     ]
 },
 {
     "featureType": "road",
     "elementType": "labels",
     "stylers": [
         {
             "weight": "0.01"
         }
     ]
 },
 {
     "featureType": "road",
     "elementType": "labels.text.fill",
     "stylers": [
         {
             "color": "#00426a"
         },
         {
             "lightness": "47"
         },
         {
             "saturation": "-75"
         }
     ]
 },
 {
     "featureType": "road",
     "elementType": "labels.icon",
     "stylers": [
         {
             "weight": "0.01"
         },
         {
             "lightness": "36"
         },
         {
             "saturation": "-59"
         }
     ]
 },
 {
     "featureType": "road.highway",
     "elementType": "geometry.fill",
     "stylers": [
         {
             "color": "#0076a8"
         },
         {
             "weight": "1.00"
         },
         {
             "lightness": "45"
         },
         {
             "saturation": "-67"
         }
     ]
 },
 {
     "featureType": "road.highway",
     "elementType": "labels.icon",
     "stylers": [
         {
             "saturation": "-62"
         },
         {
             "visibility": "simplified"
         },
         {
             "gamma": "0.66"
         },
         {
             "hue": "#0075ff"
         },
         {
             "lightness": "17"
         }
     ]
 },
 {
     "featureType": "road.arterial",
     "elementType": "geometry.fill",
     "stylers": [
         {
             "color": "#0076a8"
         },
         {
             "lightness": "63"
         },
         {
             "saturation": "-76"
         },
         {
             "weight": "2"
         }
     ]
 },
 {
     "featureType": "road.local",
     "elementType": "all",
     "stylers": [
         {
             "visibility": "simplified"
         },
         {
             "color": "#0076a8"
         },
         {
             "lightness": "66"
         },
         {
             "saturation": "-81"
         }
     ]
 },
 {
     "featureType": "transit.station",
     "elementType": "geometry.fill",
     "stylers": [
         {
             "color": "#0076a8"
         },
         {
             "lightness": "70"
         },
         {
             "saturation": "-78"
         }
     ]
 },
 {
     "featureType": "transit.station",
     "elementType": "geometry.stroke",
     "stylers": [
         {
             "lightness": "50"
         }
     ]
 },
 {
     "featureType": "transit.station",
     "elementType": "labels.text",
     "stylers": [
         {
             "saturation": "-47"
         }
     ]
 },
 {
     "featureType": "water",
     "elementType": "all",
     "stylers": [
         {
             "color": "#0076a8"
         },
         {
             "visibility": "on"
         },
         {
             "lightness": "58"
         },
         {
             "saturation": "-44"
         },
         {
             "gamma": "0.87"
         }
     ]
 }
],
   };

   // Get the HTML DOM element that will contain your map
   // We are using a div with id="map" seen below in the <body>
   var mapElement = document.getElementById("map");

   // Create the Google Map using our element and options defined above
   var map = new google.maps.Map(mapElement, mapOptions);

   // Let's also add a marker while we're at it
   var marker = new google.maps.Marker({
     position: new google.maps.LatLng(28.5685808, 77.313783, 10),
     map: map,
     title: "NTPC School of Business",
   });

   var info = new SnazzyInfoWindow({
     marker: marker,
     content: "NTPC School of Business",
   });
   info.open();
 }