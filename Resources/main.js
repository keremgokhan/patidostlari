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
    	width: '150px',
    	height: '150px',
    	borderRadius: '75px',
    	title: '+',
    	bottom: '30px',
    	backgroundColor: '#FD9627',
    	font:{fontSize:20,fontFamily:'Helvetica Neue'},
    });
    mainWindow.add(addButton);
});