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

var calculateLatLngfromPixels = function(mapview, xPixels, yPixels) {

    var region = mapview.actualRegion || mapview.region;
    var widthInPixels = mapview.rect.width;
    var heightInPixels = mapview.rect.height;

    // should invert because of the pixel reference frame
    heightDegPerPixel = -region.latitudeDelta / heightInPixels; 
    widthDegPerPixel = region.longitudeDelta / widthInPixels;

    return {
        lat : (yPixels - heightInPixels / 2) * heightDegPerPixel + region.latitude,
        lon : (xPixels - widthInPixels / 2) * widthDegPerPixel + region.longitude

    };
};


if (!Ti.Geolocation.locationServicesEnabled) {
	alert('Please enable the location services on your device');
	var activity = Titanium.Android.currentActivity;
	activity.finish();
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
	
	mapview.addEventListener('click', function(evt)
    {
        // get event properties
        var annotation = evt.annotation; //get the Myid from annotation
        
        Ti.API.info("LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA: " + annotation);
        
        /*var clicksource = evt.clicksource;
 
        if (clicksource='leftButton'){  //leftButton event      
            alert("leftButton of " + annotation + " has been clicked.");
        }
        if (clicksource='title'){   //title event
            alert("title of " + annotation + " has been clicked.");                 
        }*/
       if (clicksource='title'){   
	       var eventid = annotation.myid;
	       
	       Cloud.Objects.show({
			    classname: 'Location',
			    id: eventid
			}, function (e) {
			    if (e.success) {
			        
			        var locat = e.Location[0];
			        
			        var locationWindow = Ti.UI.createWindow({
						backgroundColor:'#FD9627',
						title: 'Location'
					});
					
					var annot = MapModule.createAnnotation({
					    latitude:locat.latitude,
					    longitude:locat.longitude,
					    title:locat.name,
					    pincolor:MapModule.ANNOTATION_ORANGE
					});
					
					var annots = [];
					annots.push(annot);
					
					var locmap = MapModule.createView({
						top: 0,
						left: 0,
						height: '35%',
						width: '100%',
						
						mapType: MapModule.NORMAL_TYPE,
						userLocation: true,
						animate: true,
						
						region: {latitude: locat.latitude, longitude: locat.longitude, latitudeDelta: 0.1, longitudeDelta: 0.1 },
						annotations: annots
					});
					
					var loclabel0=Ti.UI.createLabel({
						
						textAlign:'center',
						backgroundColor: 'white',
						width:'350px',
						text: locat.name,
						color:'#FD9627',
						height:'70px',
						font:{fontSize:15,fontFamily:'Helvetica Neue'},
						top:'40%',
						borderRadius:15,
						borderWidth:5
					});
					
					var bg = 'white';
					var text = "Empty (Click to fill)";
					var textcolor= '#FD9627';
					var block0isFull = false;
					
					if (locat.block0.length > 0)
					{
						bg = '#FD9627';
						text = locat.block0;
						textcolor= 'white';
						block0isFull = true;
					}
					
					var locview1= Ti.UI.createView({
						
						backgroundColor: bg,
						borderRadius:15,
						borderWidth:5,
						borderColor:'white',
						width:'500px',
						top:'50%',
						//text: '09.00-12.00',
						height:'250px'
						
					});
					
					
					
					
					
					
					var loclabel11=Ti.UI.createLabel({
						
						textAlign:'center',
						backgroundColor: 'transparent',
						width:'500px',
						text: '09.00-12.00',
						color: textcolor,
						height:'100px',
						font:{fontSize:25,fontFamily:'Helvetica Neue'},
						top:'25px'
					});
					
					var loclabel12=Ti.UI.createLabel({
						
						textAlign:'center',
						backgroundColor: 'transparent',
						width:'500px',
						text: text,
						color: textcolor,
						height:'100px',
						font:{fontSize:25,fontFamily:'Helvetica Neue'},
						bottom:'25px'
					});
					
					bg = 'white';
					text = "Empty (Click to fill)";
					textcolor= '#FD9627';
					var block1isFull = false;
					
					if (locat.block1.length > 0)
					{
						bg = '#FD9627';
						text = locat.block1;
						textcolor= 'white';
						block1isFull = true;
					}
					
					var locview2= Ti.UI.createView({
						
						backgroundColor: bg,
						borderRadius:15,
						borderWidth:5,
						borderColor:'white',
						width:'500px',
						top:'75%',
						height:'250px'
						
					});
					
					var loclabel21=Ti.UI.createLabel({
						
						textAlign:'center',
						backgroundColor: 'transparent',
						width:'500px',
						text: '15.00-18.00',
						color: textcolor,
						height:'100px',
						font:{fontSize:25,fontFamily:'Helvetica Neue'},
						top:'25px'
					});
					
					var loclabel22=Ti.UI.createLabel({
						
						textAlign:'center',
						backgroundColor: 'transparent',
						width:'500px',
						text: text,
						color: textcolor,
						height:'100px',
						font:{fontSize:25,fontFamily:'Helvetica Neue'},
						bottom:'25px'
					});
					
					Cloud.Users.showMe(function (e) {
					    if (e.success) {
					        var user = e.users[0];
					        locview1.addEventListener('click', function(e){
						
								if (block0isFull == false)
								{
									Cloud.Objects.update({
									    classname: 'Location',
									    id: locat.id,
									    fields: {
									    	block0: user.first_name + ' ' + user.last_name
									    }
									}, function (e) {
									    if (e.success) {
									        block0isFull = true;
									        locview1.backgroundColor = '#FD9627';
									        loclabel11.color = "#FFF";
									        loclabel12.color = "#FFF";
									        loclabel12.text = user.first_name + ' ' + user.last_name;
									        
									    } else {
									        alert('Error:\n' +
									            ((e.error && e.message) || JSON.stringify(e)));
									    }
									});
								}
								
								
							});
							locview2.addEventListener('click', function(e){
						
								if (block1isFull == false)
								{
									Cloud.Objects.update({
									    classname: 'Location',
									    id: locat.id,
									    fields: {
									    	block1: user.first_name + ' ' + user.last_name
									    }
									}, function (e) {
									    if (e.success) {
									        block1isFull = true;
									        locview2.backgroundColor = '#FD9627';
									        loclabel21.color = "#FFF";
									        loclabel22.color = "#FFF";
									        loclabel22.text = user.first_name + ' ' + user.last_name;
									    } else {
									        alert('Error:\n' +
									            ((e.error && e.message) || JSON.stringify(e)));
									    }
									});
								}
								
								
							});
					    } else {
					        alert('Error:\n' +
					            ((e.error && e.message) || JSON.stringify(e)));
					    }
					});
					
					
					////////////////////////////////
					locview1.add(loclabel11);
					locview1.add(loclabel12);
					
					locview2.add(loclabel21);
					locview2.add(loclabel22);
					locationWindow.add(locmap);
					locationWindow.add(loclabel0);
					locationWindow.add(locview1);
					locationWindow.add(locview2);
					locationWindow.open();
			        
			    } else {
			        alert('Error:\n' +
			            ((e.error && e.message) || JSON.stringify(e)));
			    }
			});
		           
        }
       
      
       
                  
	});
	
	var llatitude = 0;
	var llongitude = 0;
	
	mapview.addEventListener('regionchanged',function(evt){
	    llatitude = evt.latitude.toPrecision(10);
	    llongitude = evt.longitude.toPrecision(10);
	});
	
    mainWindow.add(mapview);
    
    mainWindow.addEventListener('open', function(e){
		Cloud.Objects.query({
		    classname: 'Location'
		}, function (e) {
		    if (e.success) {
		        /*alert('Success:\n' +
		            'Count: ' + e.Location.length);*/
		        for (var i = 0; i < e.Location.length; i++) {
		            var loc = e.Location[i];
		            /*alert('id: ' + cars.id + '\n' +
		                'make: ' + car.make + '\n' +
		                'color: ' + car.color + '\n' +
		                'year: ' + car.year + '\n' +
		                'created_at: ' + car.created_at);*/
		            var temp = MapModule.createAnnotation({
					    latitude:loc.latitude,
					    longitude:loc.longitude,
					    title:loc.name,
					    pincolor:MapModule.ANNOTATION_ORANGE,
					    myid:loc.id // Custom property to uniquely identify this annotation.
					});
					mapview.addAnnotation(temp);
		        }
		    } else {
		        alert('Error:\n' +
		            ((e.error && e.message) || JSON.stringify(e)));
		    }
		});
	});
    
    var addButton = Ti.UI.createButton({
    	width: '120px',
    	height: '120px',
    	borderRadius: '60px',
    	title: '+',
    	bottom: '30px',
    	backgroundColor: '#FD9627',
    	font:{fontSize:40,fontFamily:'Helvetica Neue'},
    });
    
    var locationNameField = Ti.UI.createTextField({
	   		top: '10px',
	   		height: '100px',
	   		width: '90%',
	   		color: '#000',
	   		backgroundColor: 'white',
	   		borderColor: '#FD9627',
	   		borderRadius: 15,
	   		borderWidth: 5,
	   		hintText: 'Enter a name for location...',
	   		visible: false,
	   		softKeyboardOnFocus : Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS
	   	});
	   	
   	var okButton = Ti.UI.createButton({
   		top: '120px',
   		width: '250px',
   		height: '100px',
   		color: 'white',
   		borderRadius: 15,
   		borderWidth: 5,
   		backgroundColor: '#FD9627',
   		font:{fontSize:20,fontFamily:'Helvetica Neue'},
   		title: 'OK',
   		visible: false
   	});
   	
   	okButton.addEventListener('click',function(){
		   	
		   	var lname = locationNameField.value;
		   	
		   	locationNameField.blur();
		   	locationNameField.hide();
		   	okButton.hide();
		   			
		   	//var coordinate = calculateLatLngfromPixels(mapview, e.x, e.y);
		    //var llongitude = coordinate.lat;
		    //var llatitude = coordinate.lat;
		    
		    alert(llatitude + " + " + llongitude);
		    
		    //var Cloud = require('ti.cloud');
			//Cloud.debug = true;
		    
		    Cloud.Objects.create({
			    classname: 'Location',
			    fields: {
			        latitude: llatitude,
			        longitude: llongitude,
			        name: lname,
			        block0: '',
			        block1: ''
			    },
			    acl_name: 'public_access'
			}, function (e) {
			    if (e.success) {
			        //var car = e.cars[0];
			        //alert('Success!');
			        mapview.removeAllAnnotations();
			        Cloud.Objects.query({
					    classname: 'Location'
					}, function (e) {
					    if (e.success) {
					        /*alert('Success:\n' +
					            'Count: ' + e.Location.length);*/
					        for (var i = 0; i < e.Location.length; i++) {
					            var loc = e.Location[i];
					            /*alert('id: ' + cars.id + '\n' +
					                'make: ' + car.make + '\n' +
					                'color: ' + car.color + '\n' +
					                'year: ' + car.year + '\n' +
					                'created_at: ' + car.created_at);*/
					            var temp = MapModule.createAnnotation({
								    latitude:loc.latitude,
								    longitude:loc.longitude,
								    title:loc.name,
								    pincolor:MapModule.ANNOTATION_ORANGE,
								    myid:loc.id // Custom property to uniquely identify this annotation.
								});
								mapview.addAnnotation(temp);
								addButton.animate({bottom: '30px', duration: 400});
					        }
					    } else {
					        alert('Error:\n' +
					            ((e.error && e.message) || JSON.stringify(e)));
					    }
					});
			        
			    } else {
			        alert('Error:\n' +
			            ((e.error && e.message) || JSON.stringify(e)));
			    }
			});
		
		});
    
    addButton.addEventListener('click',function(){
	   	
	   	//addButton.bottom = -200 + 'px';
	   	addButton.animate({bottom: -200+'px', duration: 400});
	   	
	   	locationNameField.setVisible(true);
	   	locationNameField.show();
	   	okButton.setVisible(true);
	   	okButton.show();
		
		locationNameField.focus();
	   	
	});
    mainWindow.add(addButton);
    mainWindow.add(locationNameField);
    locationNameField.hide();
	mainWindow.add(okButton);
	okButton.hide();
});
mainWindow.open();