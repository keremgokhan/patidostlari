// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#FD9627');

var loginWindow = Ti.UI.createWindow({
	title: 'Login',
	navBarHidden: true,
	tabBarHidden: true
});

loginWindow.open();
