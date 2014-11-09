/* MAIN WINDOW */

var mainWindow = Ti.UI.createWindow({
	title: 'Pati Dostlari'
});

var MapModule = require('ti.map');

var rc = MapModule.isGooglePlayServicesAvailable();
switch (rc) {
    case MapModule.SUCCESS:
        Ti.API.info('Google Play services is installed.');
        break;
    case MapModule.SERVICE_MISSING:
        alert('Google Play services is missing. Please install Google Play services from the Google Play store.');
        break;
    case MapModule.SERVICE_VERSION_UPDATE_REQUIRED:
        alert('Google Play services is out of date. Please update Google Play services.');
        break;
    case MapModule.SERVICE_DISABLED:
        alert('Google Play services is disabled. Please enable Google Play services.');
        break;
    case MapModule.SERVICE_INVALID:
        alert('Google Play services cannot be authenticated. Reinstall Google Play services.');
        break;
    default:
        alert('Unknown error.');
        break;
}

Titanium.Geolocation.getCurrentPosition(function(e)
{
    if (e.error)
    {
        alert('HFL cannot get your current location');
        return;
    }
 
    var longitude = e.coords.longitude;
    var latitude = e.coords.latitude;
    var altitude = e.coords.altitude;
    var heading = e.coords.heading;
    var accuracy = e.coords.accuracy;
    var speed = e.coords.speed;
    var timestamp = e.coords.timestamp;
    var altitudeAccuracy = e.coords.altitudeAccuracy;
    
    var mapview = MapModule.createView({
		mapType: MapModule.NORMAL_TYPE,
		userLocation: true,
		animate: true,
		width: '100%',
		height: '100%',
		region: {latitude: latitude, longitude: longitude, latitudeDelta: 0.1, longitudeDelta: 0.1 }
	});
 
    mainWindow.add(mapview);
    
    var addButton = Ti.UI.createButton({
    	width: '120px',
    	height: '120px',
    	borderRadius: '60px',
    	title: '+',
    	bottom: '30px',
    	backgroundColor: '#FD9627',
    	font:{fontSize:40,fontFamily:'Helvetica Neue'},
    });
    addButton.addEventListener('click',function(){
	   	
	   	addButton.bottom = -200 + 'px';
	   	
	   	
	   	var locationNameField = Ti.UI.createTextField({
	   		top: '10px',
	   		height: '100px',
	   		width: '90%',
	   		hintText: 'Enter a name for location...'
	   	});
	   	
	   	var okButton = Ti.UI.createButton({
	   		top: '120px',
	   		width: '50px',
	   		height: '100px',
	   		title: 'OK'
	   	});
	   	
	   	/*mapview.addEventListener('click',function(){
		   	
		   	var coordinate = calculateLatLngfromPixels(mapview, e.x, e.y);
		    var longitude = coordinate.lat;
		    var latitude = coordinate.lat;
		   	
		});*/
	   	
	});
    mainWindow.add(addButton);
});
