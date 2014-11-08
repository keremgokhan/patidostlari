// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#FD9627');

var loginWindow = Ti.UI.createWindow({
	title: 'Login',
	backgroundColor:'transparent',
	navBarHidden: true,
	tabBarHidden: true
});

var view1= Ti.UI.createView({
	backgroundColor:'white',
	width:'450px',
	top:'50%',
	height:'80px'
	
});

var textField= Ti.UI.createTextField({
	backgroundColor: 'white',
	color:'black',
	hintText: 'Enter username',
	width:'450px',
	height:'80px',
	left:0,
	top:0
	
});

var view2= Ti.UI.createView({
	backgroundColor:'white',
	width:'450px',
	top:'60%',
	height:'80px'
	
});

var textField2= Ti.UI.createTextField({
	backgroundColor: 'white',
	color:'black',
	hintText: 'Enter password',
	width:'450px',
	height:'80px',
	left:0,
	top:0
	
});

var button2=Ti.UI.createButton({
	title:'Sign in',
	top:0,
	left:0,
	width:'auto',
	heigth:'80px',
	color:'#808080',
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
	width:'auto',
	heigth:'80px',
	color:'#808080',
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




view1.add(textField);


loginWindow.add(view1);
//////////////////////////

view2.add(textField2);

loginWindow.add(view2);
////////////////////////
view3.add(button2);
view3.add(button3);
loginWindow.add(view3);




loginWindow.open();

