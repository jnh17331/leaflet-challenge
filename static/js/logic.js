// Weekly query
//let queryUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson';

// Monthly query (More data)
let queryUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson'

api_key = 'pk.eyJ1IjoiZGFuemFub3JpYSIsImEiOiJja2xzbmRtdW0wMG5vMndwOWZ5eHB0aGg1In0.jUlWUL4j8TYa5ESWbfJqnw'


// Queries the link for Earthquake Data
d3.json(queryUrl).then(function(data) {
  createFeatures(data.features);
  console.log(data.features);
});

// This function creates tiles/layers and adds them to the map
function createMap(earthquakes) {

  // Adding satellite tile layer
  let satelliteMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={api_key}', {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "satellite-v9",
    api_key: api_key
  });

  // Adding the Street Map tile layer
  let streetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  });

  let baseMap = {
  "Street": streetMap,
  "Satellite": satelliteMap,
  };

  let overlayMap = {
  Earthquakes: earthquakes
  };

  // Creates map object and attaches it to the map div in our html with our layers
  let myMap = L.map("map", {
  center: [37.829478, -118.174801],
  zoom: 5,
  layers: [streetMap, earthquakes]
  });

  // Creates control panel for us to change layers
  L.control.layers(baseMap, overlayMap, {
  collapsed: false
  }).addTo(myMap);


  // Gets the color based on magnitutde
  function getColor(d) {
    return  d > 7 ? '#ff0000' :
        d > 6 ? '#ff3d3d' :
        d > 5 ? '#f06b6b' :
        d > 4 ? '#f0936b' :
        d > 3 ? '#f3ba4e' :
        d > 2 ? '#f3db4c' :
        d > 1 ? '#e1f34c' :
                '#b7f34d';
  };

  // Creates our legend
  let legend = L.control({ position: 'bottomright' });

  legend.onAdd = function() {
    const div = L.DomUtil.create('div', 'info legend');
    const magnitudes = [0, 1, 2, 3, 4, 5, 6, 7];
    const legendTitle = '<h4>Magnitude</h4>';
  
    div.innerHTML = legendTitle;
  
    for (let i = 0; i < magnitudes.length; i++) {
      const range = magnitudes[i] + (magnitudes[i + 1] ? '&ndash;' + magnitudes[i + 1] : '+');
      const color = getColor(magnitudes[i] + 1);
      const labelHTML = '<i style="background:' + color + '"></i> ' + range + '<br>';
      div.innerHTML += labelHTML;
    }
  
    return div;
  };

  legend.addTo(myMap);
};


// Creates the dialogue when clicked on an earthquake and creates each data point, then adding it to the map
function createFeatures(eqdata){
  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.place + "</h3><h3><p>" + new Date(feature.properties.time) + "</p>" + "<h4> Magnitude: " + feature.properties.mag + "</h4>");
    }
  
  let layerToMap = L.geoJSON(eqdata, {
    onEachFeature: onEachFeature,
    pointToLayer: function(feature, latlng) {
      let radius = feature.properties.mag * 4

      if (feature.properties.mag >= 7) {
        fillcolor = '#ff0000';
      }
      else if (feature.properties.mag >= 6) {
        fillcolor = '#ff3d3d';
      }
      else if (feature.properties.mag >= 5) {
        fillcolor = '#f0936b';
      }
      else if (feature.properties.mag >= 4) {
        fillcolor = '#f0936b';
      }
      else if (feature.properties.mag >= 3) {
        fillcolor = '#f3ba4e';
      }
      else if (feature.properties.mag >= 2) {
        fillcolor = '#f3db4c';
      }
      else if (feature.properties.mag >= 1) {
        fillcolor = '#e1f34c';
      }
      else  fillcolor = '#b7f34d';

      return L.circleMarker(latlng, {
        radius: radius,
        color: 'black',
        fillColor: fillcolor,
        fillOpacity: 1,
        weight: 1
      });
    }
});
createMap(layerToMap);
};