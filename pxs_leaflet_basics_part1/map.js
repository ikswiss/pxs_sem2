//Sample 1 : WebMap Making for PXS class
//Immanuel Koh

var map = L.map('map').setView([46.520278, 6.565556],15);

//Option 1(without Mapbox)
// L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png',{
// 	attribution: '&copy; OpenStreetMap contributors',
// 	maxZoom: 18
// }).addTo(map);


//Option 2(with Mapbox's current options)
L.tileLayer('https://api.mapbox.com/v4/mapbox.streets-satellite/{z}/{x}/{y}.jpg80?access_token=pk.eyJ1IjoiaW1ta29oIiwiYSI6ImNpbDVtbm1zbjAwMGJ2dmt1cHNrcGRpangifQ.ILxJMpWpWAbvOG5x9J2sIA',{
	attribution: '&copy; MapBox &copy; OpenStreetMap contributors',
	maxZoom: 18
}).addTo(map);


//Use Your Own Examples :
var epflAki = [
	{
		name: "Rolex Learning Center",
		latlng: [46.518333, 6.568056],
		msg: "Favourite Building on Campus!",
		img:"img/epfl_0.jpg",
		param: 125,
		url:"http://rolexlearningcenter.epfl.ch/"
	},
	{
		name: "BC Building",
		latlng: [46.518483, 6.561928],
		msg: "Having Class Here!",
		img:"img/epfl_1.jpg",
		param: 75,
		url:""
	},
	{
		name: "SwissTech Convention Centre",
		latlng: [46.523005, 6.564640],
		msg: "Impressive!",
		img:"img/epfl_2.jpg",
		param: 150,
		url:"http://www.tstcc.ch/home/"
	},
	{
		name: "PolyDome",
		latlng: [46.521465, 6.568984],
		msg: "Hidden Gem!",
		img:"img/epfl_3.jpg",
		param: 50,
		url:""
	},
	{
		name: "BI Building",
		latlng: [46.519817, 6.569043],
		msg: "I think here is where the La Poste...",
		img:"img/epfl_4.png",
		param: 100,
		url:"http://www.perraultarchitecture.com/en/projects/2554-rehabilitation_extension_of_the_former_central_library_bi_into_main_administration_building_of_the_ecole_polytechnique_federale_de_lausanne.html"
	}

];

var circleArray = [];

var epflMarkerArray = [];

var iconAki = L.icon({
	iconUrl: "img/camera-24.png",
	iconRetinaUrl: "img/camera-24@2x.png",
	iconSize: [24,24]
	// iconAnchor: [12,24],
	// popupAnchor: [0,-24]
});

var polyVertices = epflAki.map(function(obj){return obj.latlng;});

// var polyline = new L.polyline(polyVertices,{
// 	color: "rgb(255,127,0)",
// 	weight: 4,
// }).addTo(map);

var polygon = new L.polygon(
	polyVertices,
	{
		color: "orange",
		weight: 3,
		strokeOpacity: 0.5,
		fillColor: "grey",
		fillOpacity: 0.5
	}
).addTo(map);

for(var i =0;i<epflAki.length;i++){
	epflMarkerArray[i] = new L.marker(epflAki[i].latlng,{icon:iconAki}).addTo(map);
	circleArray[i] = new L.circle(epflAki[i].latlng,epflAki[i].param,{stroke:false,fillColor:"pink",fillOpacity:0.5}).addTo(map) ;
	var popup = L.popup({
		minWidth : 250
		}).setContent('<img src='+epflAki[i].img+'><h3><a href='+epflAki[i].url+'>'+epflAki[i].name+'</a></h3><p>'+epflAki[i].msg+'</p>')
		;
	epflMarkerArray[i].bindPopup(popup);
}















