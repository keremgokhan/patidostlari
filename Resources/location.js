var locationWindow = Ti.UI.createWindow({
	backgroundColor:'white',
	title: 'Location'
});


var loclabel0=Ti.UI.createLabel({
	
	textAlign:'center',
	backgroundColor: '#FD9627',
	width:'350px',
	text: 'Yurtlar Bolgesi',
	color:'white',
	height:'70px',
	font:{fontSize:15,fontFamily:'Helvetica Neue'},
	top:'40%',
	borderRadius:15,
	borderWidth:5
});
var locview1= Ti.UI.createView({
	
	backgroundColor: '#FD9627',
	borderRadius:15,
	borderWidth:5,
	width:'500px',
	top:'50%',
	//text: '09.00-12.00',
	height:'250px'
	
});

var loclabel11=Ti.UI.createLabel({
	
	textAlign:'center',
	backgroundColor: '#FD9627',
	width:'500px',
	text: '09.00-12.00',
	color:'white',
	height:'100px',
	font:{fontSize:25,fontFamily:'Helvetica Neue'},
	top:'25px'
});

var loclabel12=Ti.UI.createLabel({
	
	textAlign:'center',
	backgroundColor: '#FD9627',
	width:'500px',
	text: 'Berna Kabadayı',
	color:'white',
	height:'100px',
	font:{fontSize:25,fontFamily:'Helvetica Neue'},
	bottom:'25px'
});

var locview2= Ti.UI.createView({
	
	backgroundColor: '#7D736C',
	borderRadius:15,
	borderWidth:5,
	width:'500px',
	top:'75%',
	height:'250px'
	
});

var loclabel21=Ti.UI.createLabel({
	
	textAlign:'center',
	backgroundColor: 'transparent',
	width:'500px',
	text: '15.00-18.00',
	color:'white',
	height:'100px',
	font:{fontSize:25,fontFamily:'Helvetica Neue'},
	top:'25px'
});

var loclabel22=Ti.UI.createLabel({
	
	textAlign:'center',
	//backgroundColor: '#7D736C',
	width:'500px',
	text: 'None',
	color:'white',
	height:'100px',
	font:{fontSize:25,fontFamily:'Helvetica Neue'},
	bottom:'25px'
});
////////////////////////////////7
locview1.add(loclabel11);
locview1.add(loclabel12);

locview2.add(loclabel21);
locview2.add(loclabel22);
locationWindow.add(loclabel0);
locationWindow.add(locview1);
locationWindow.add(locview2);
locationWindow.open();
