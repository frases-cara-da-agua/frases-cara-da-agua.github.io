const url = `https://positive-vibes-api.herokuapp.com/quotes/random`;
//'';

fetch(url,{
    method: 'GET',
    mode: 'cors',
    headers: new Headers({
        'Access-Control-Allow-Origin': '*',
        'Content-Type':  'application/json',
        'dataType': 'jsonp'
    })
}).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
  }).catch(function() {
    console.log("Booo");
  });

  function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

random_bg_color();