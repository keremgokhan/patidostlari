// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#FD9627');

var Cloud = require('ti.cloud');
Cloud.debug = true;

if (Ti.App.Properties.hasProperty('isLogged') && Ti.App.Properties.getBool('isLogged'))
{
	Ti.include('main.js');
}
else
{
	Ti.include('login.js');
}

//Ti.include('location.js');





