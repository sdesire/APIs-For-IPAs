var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');
var icon = document.querySelector('.icon');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid=f6b36b81de024b7633ed8e427463edeb')

.then(response => response.json())
.then(data => {
  //var forecast = data['list'];
  //var futureWeather = forecast[1]['main']['temp']
  var tempValue = Math.floor (data['main']['temp']);
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var iconSrc  = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
  
  
/*for (var counter = 0; counter < forecast.length; counter++) {
  if(counter < 1){
    console.log('Inside the loop:' + counter);
    console.log('Inside the list:' + forecast[counter]);
    var icon = document.querySelector('.icon' + counter);
    var date = document.querySelector('.date' + counter);
    var temp = document.querySelector('.temp' + counter);
    var desc = document.querySelector('.desc' + counter);

    var futureWeather = forecast[counter]['main']['temp'];
    var descValue = forecast[counter]['weather'][0]['description'];
    var iconSrc  = "http://openweathermap.org/img/wn/" + forecast[counter]['weather'][0]['icon'] + ".png";
    var datevalue = forecast[counter]['dt_txt'];
    desc.innerHTML = descValue;
    temp.innerHTML = "Temp - "+futureWeather;
    icon.setAttribute("Src", iconSrc);
    date.innerHTML = datevalue;
  }
}*/


  main.innerHTML = nameValue;
  desc.innerHTML = descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";
  icon.setAttribute("Src", iconSrc);
  

})

.catch(err => alert("Wrong city name!"+err));
})

/*catch error*/