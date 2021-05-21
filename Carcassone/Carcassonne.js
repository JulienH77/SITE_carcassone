var mymap = L.map('mapid').setView([43.2158, 2.351440000000025], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

//Paris
var marker = L.marker([48.8566101, 2.3514992]).addTo(mymap);
marker.bindPopup("<b>Paris</b>").openPopup();

//Marseille
var marker = L.marker([43.2961743, 5.3699525]).addTo(mymap);
marker.bindPopup("<b>Marseille</b>").openPopup();

//Bordeaux
var marker = L.marker([44.841225, -0.5800364]).addTo(mymap);
marker.bindPopup("<b>Bordeaux</b>").openPopup();

//Champs-sur-Marne
var marker = L.marker([48.8526892, 2.6027219]).addTo(mymap);
marker.bindPopup("<b>Champs-sur-marne</b>").openPopup();

//Carcassonne
var marker = L.marker([43.2158, 2.351440000000025]).addTo(mymap);
marker.bindPopup("<b>Carcassonne</b><br>ici, en France").openPopup();