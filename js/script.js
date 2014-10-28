var map = L.map('map').setView([44.0000, -100.0000], 5);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

var willoughby = L.marker([40.694491, -73.941721]).addTo(map);
willoughby.bindPopup("Willoughby");

var flatbush = L.marker([40.640522, -73.950685]).addTo(map);
flatbush.bindPopup("Flatbush");

var tibbetts = L.marker([45.500620, -122.646971]).addTo(map);
flatbush.bindPopup("Tibbetts");

var ODB = L.marker([45.478173, -122.630607]).addTo(map);
ODB.bindPopup("Olde Dorm Block Kanye Westport");

var chittick = L.marker([45.481197, -122.635993]).addTo(map);
chittick.bindPopup("Chittick");

var macNaughton = L.marker([45.479389, -122.632230]).addTo(map);
macNaughton.bindPopup("MacNaughton II");

var sally = L.marker([45.477208, -122.624054]).addTo(map);
sally.bindPopup("Sally's House");

var OFCS = L.marker([45.492462, -122.630390]).addTo(map);
OFCS.bindPopup("OFCS House");