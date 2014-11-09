var loginWindow = Ti.UI.createWindow({
	title: 'Login',
	backgroundColor:'transparent'
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
	passwordMask:true,
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
		alert('Enter username');
	else if(textField2.value.length==0)
		alert('Enter password');
	else
	{
		Cloud.Users.login({ 
		    login: textField.value,
		    password: textField2.value
		}, function(e) {
		    if (e.success) {
		    	
		    	//Ti.include('main.js');
		    	mainWindow.open();
		    	
		    	
		    	     
		    } else {
		        Ti.API.info("Login failed.");
		    }
});
	}
		
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
	//viewbuyuk.left=ScreenWidth +'px';
	viewbuyuk.animate({
		left: -ScreenWidth +'px',
		duration:300
	});
	//viewbuyuk2.left=0;
	viewbuyuk2.animate({
		left: 0,
		duration: 300
	});
		
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
	left:0,
	height:'100%'
});


//////////////////////////////////////////////////////
//sign up ekrani

var logo2=Ti.UI.createImageView({
	image:'logo01.png',
	width:'250px',
	top: '10%',
	opacity: 0
});

var view21= Ti.UI.createView({
	backgroundColor:'transparent',
	width:'450px',
	top:'40%',
	height:'80px'
	
});

var textField21= Ti.UI.createTextField({
	backgroundColor: 'white',
	borderRadius:15,
	borderWidth:5,
	color:'black',
	hintText: 'Username',
	
	width:'450px',
	height:'80px',
	left:0,
	top:0
	
});

textField21.addEventListener('change', function(e){
	logo2.opacity=0.33;
		
});

var view22= Ti.UI.createView({
	backgroundColor:'transparent',
	width:'450px',
	top:'50%',
	height:'80px'
	
});

var textField22= Ti.UI.createTextField({
	backgroundColor: 'white',
	color:'black',
	hintText: 'Name Surname',
	borderRadius:15,
	borderWidth:5,
	width:'450px',
	height:'80px',
	left:0,
	top:0
	
});

textField22.addEventListener('change', function(e){
	logo2.opacity=0.66;
		
});
var view23= Ti.UI.createView({
	backgroundColor:'transparent',
	width:'450px',
	top:'60%',
	height:'80px'
	
});

var textField23= Ti.UI.createTextField({
	backgroundColor: 'white',
	keyboardType:Titanium.UI.KEYBOARD_EMAIL,
	color:'black',
	hintText: 'Email',
	borderRadius:15,
	borderWidth:5,
	width:'450px',
	height:'80px',
	left:0,
	top:0
	
});
textField23.addEventListener('change', function(e){
	logo2.opacity=1;
		
});

var view24= Ti.UI.createView({
	backgroundColor:'transparent',
	width:'450px',
	top:'70%',
	height:'80px'
	
});

var textField24= Ti.UI.createTextField({
	backgroundColor: 'white',
	color:'black',
	hintText: 'Password',
	passwordMask:true,
	borderRadius:15,
	borderWidth:5,
	width:'450px',
	height:'80px',
	left:0,
	top:0
	
});


var button22=Ti.UI.createButton({
	title:'Back',
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


button22.addEventListener('click', function(e){
	//viewbuyuk.left=ScreenWidth +'px';
	viewbuyuk.animate({
		left: 0,
		duration:300
	});
	//viewbuyuk2.left=0;
	viewbuyuk2.animate({
		left: ScreenWidth +'px',
		duration: 300
	});
		
});

var button23=Ti.UI.createButton({
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

button23.addEventListener('click', function(e){
	if(textField21.value.length==0)
		alert('Enter username');
	else if(textField22.value.length==0)
		alert('Enter name surname');
	else if(textField23.value.length==0)
		alert('Enter email');
	else if(textField24.value.length==0)
		alert('Enter password');
	else
	{
		var str = textField22.value;
		var fname = str.substr(0,str.indexOf(' '));
		var sname = str.substr(str.indexOf(' ')+1);
		Cloud.Users.create({ 
		    username: textField21.value,
		    email: textField23.value,
		    password: textField24.value,
		    password_confirmation: textField24.value,
		    first_name: fname,
		    last_name: sname
		}, function(e) {
		    if (e.success) {
		        
		    	mainWindow.open();
		    	
		    } else {
		        alert("Signup failed.");
		    }
		});
	}
	
});

var view25= Ti.UI.createView({
	backgroundColor:'transparent',
	width:'450px',
	top:'80%',
	height:'80px'
	
});

var ScreenWidth = Ti.Platform.displayCaps.platformWidth;

var viewbuyuk2= Ti.UI.createView({
	backgroundColor:'transparent',
	width:ScreenWidth +'px',
	left:ScreenWidth +'px',
	height:'100%'
});
////////////////////////////////////////////////////////
view1.add(textField);
viewbuyuk.add(view1);


//////////////////////////

view2.add(textField2);
viewbuyuk.add(view2);
////////////////////////
view3.add(button2);
view3.add(button3);
viewbuyuk.add(view3);
///////////////////////////

viewbuyuk.add(logo);
loginWindow.add(viewbuyuk);
//////////////////////////////////
view21.add(textField21);
viewbuyuk2.add(view21);

view22.add(textField22);
viewbuyuk2.add(view22);

view23.add(textField23);
viewbuyuk2.add(view23);

view24.add(textField24);
viewbuyuk2.add(view24);

///////////////////////////////////////77
view25.add(button22);
view25.add(button23);

viewbuyuk2.add(view25);
//////////////////////////////////////
viewbuyuk2.add(logo2);
//////////////////////////////////////
loginWindow.add(viewbuyuk2);
///////////////////////////////////
loginWindow.open();