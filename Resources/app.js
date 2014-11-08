// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#FD9627');

var loginWindow = Ti.UI.createWindow({
	title: 'Login',
	backgroundColor:'transparent',
	navBarHidden: true,
	tabBarHidden: true
});

var view1= Ti.UI.createView({
	backgroundColor:'transparent',
	width:'450px',
	top:'50%',
	height:'80px'
	
});

var textField= Ti.UI.createTextField({
	backgroundColor: 'white',
	borderRadius:15,
	borderWidth:5,
	color:'black',
	hintText: 'Enter username',
	
	width:'450px',
	height:'80px',
	left:0,
	top:0
	
});

var view2= Ti.UI.createView({
	backgroundColor:'transparent',
	width:'450px',
	top:'60%',
	height:'80px'
	
});

var textField2= Ti.UI.createTextField({
	backgroundColor: 'white',
	color:'black',
	hintText: 'Enter password',
	borderRadius:15,
	borderWidth:5,
	width:'450px',
	height:'80px',
	left:0,
	top:0
	
});

var button2=Ti.UI.createButton({
	title:'Sign in',
	top:0,
	left:0,
	width:'175px',
	heigth:'80px',
	color:'#808080',
	borderRadius:15,
	borderWidth:5,
	font:{fontSize:15,fontFamily:'Helvetica Neue'},
	backgroundColor:'white'
	
});

button2.addEventListener('click', function(e){
	if(textField.value.length==0)
		alert('bir seyler giriniz');
	else
		alert(textField.value);
		
});
		
var button3=Ti.UI.createButton({
	title:'Sign up',
	top:0,
	right:0,
	width:'175px',
	heigth:'80px',
	color:'#808080',
	borderRadius:15,
	borderWidth:5,
	font:{fontSize:15,fontFamily:'Helvetica Neue'},
	backgroundColor:'white'
	
});

button3.addEventListener('click', function(e){
	if(textField.value.length==0)
		alert('bir seyler giriniz');
	else
		alert(textField.value);
		
});
var view3= Ti.UI.createView({
	backgroundColor:'transparent',
	width:'450px',
	top:'70%',
	height:'80px'
	
});

var logo=Ti.UI.createImageView({
	image:'logo02.png',
	width:'450px',
	top: '15%'
});

var ScreenWidth = Ti.Platform.displayCaps.platformWidth;

var viewbuyuk= Ti.UI.createView({
	backgroundColor:'transparent',
	width:ScreenWidth +'px',
	left:-ScreenWidth+ 'px',
	height:'100%'
});


view1.add(textField);


viewbuyuk.add(view1);
//////////////////////////

view2.add(textField2);

viewbuyuk.add(view2);
////////////////////////
view3.add(button2);
view3.add(button3);
viewbuyuk.add(view3);
viewbuyuk.add(logo);
loginWindow.add(viewbuyuk);



loginWindow.open();


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
});

mainWindow.open();





