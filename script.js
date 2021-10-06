var input = document.querySelector('#cityChoice');
var main = document.querySelector('#name');
var temp = document.querySelector('#temp');
var desc = document.querySelector('#desc');
var clouds = document.querySelector('#clouds');
var button = document.querySelector('#btn');
var hum = document.querySelector('#humidity')

button.addEventListener('click', function (){
fetch('http://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = Math.floor (data['main']['temp']);
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var humValue  = data['main']['humidity'];
  var descCap = descValue.split(" ");
  for (var i = 0; i < descCap.length; i++) {
    descCap[i] = descCap[i].charAt(0).toUpperCase() + descCap[i].slice(1);
}
    var descCap2 = descCap.join(" ");
    console.log(descCap2);

  main.innerHTML = nameValue;
  desc.innerHTML = "Weather: " + descCap2;
  temp.innerHTML = "Temperature: " + tempValue + "&#176;";
  hum.innerHTML = "Humidity: " + humValue + "&#37;";
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})

/*catch error*/