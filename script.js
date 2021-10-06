var input = document.querySelector('#cityChoice');
var main = document.querySelector('#name');
var temp = document.querySelector('#temp');
var desc = document.querySelector('#desc');
var clouds = document.querySelector('#clouds');
var button = document.querySelector('#btn');
var hum = document.querySelector('#humidity')
var icon = document.querySelector('.icon');

button.addEventListener('click', function (){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid=f6b36b81de024b7633ed8e427463edeb')
.then(response => response.json())
.then(data => {
  var tempValue = Math.floor (data['main']['temp']);
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var humValue  = data['main']['humidity'];
  var descCap = descValue.split(" ");
  var iconSrc  = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";

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
  icon.setAttribute("Src", iconSrc);

})

.catch(err => alert("Wrong city name!"));
})

/*catch error*/