//Sample 2 :  WebMap Making for PXS class
//Immanuel Koh

var map = L.map('map').setView([46.520278, 6.565556],15);


L.tileLayer('https://api.mapbox.com/v4/immkoh.b536e423/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaW1ta29oIiwiYSI6ImNpbDVtbm1zbjAwMGJ2dmt1cHNrcGRpangifQ.ILxJMpWpWAbvOG5x9J2sIA',{
	attribution: '&copy; MapBox &copy; OpenStreetMap contributors',
	maxZoom: 18
}).addTo(map);



function popUp(feature,layer) {
		var popup = L.popup({
		minWidth : 200
		}).setContent('<h3>'+feature.properties.name+'</h3><p>'+feature.properties.amenity+'</p>')
		;
	// layer.bindPopup(feature.properties.name);
	layer.bindPopup(popup);
}

$.getJSON('json/epfl_pxs_demo.geojson', function(data) {
	L.geoJson(data,{
		onEachFeature: popUp,
		style: function(feature){
			switch (feature.properties.amenity){
				case 'university' : return {stroke: false,fillColor:'pink',fillOpacity:1};
				default : return {stroke: false,fillColor:'#ff4d4d',fillOpacity:1};
			}
		}
	}).addTo(map);

});













