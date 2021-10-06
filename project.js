var inputDiv = document.getElementById('breweryType');
var inputs = inputDiv.getElementsByTagName('input');

document.querySelector('#userChoice').addEventListener('keyup', function(e){ 
  const getBreweriesBtn = document.querySelector('#btn');
  //enter key pressed up
  if(e.keyCode === 13){
    e.preventDefault();
    getBreweriesBtn.click();
  }
});

//Search For breweries when Checkbox is Clicked
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('click', function(){
    const cityChoice = document.getElementById('cityChoice').value;

    //only search if city choice is not empty
    if(cityChoice !== ""){
      getBreweries();
    }
  });    
}

function getAllBreweriesTypes() {
  var inputDiv = document.getElementById('breweryType');
  var inputs = inputDiv.getElementsByTagName('input');

  var breweryTypes = [];

  for (let i = 0; i < inputs.length; i++) {

      if(inputs[i].type === "checkbox"){
        breweryTypes.push(inputs[i].value);
      }   
  }

  return breweryTypes;
}

function getBreweriesTypes() {
  var inputDiv = document.getElementById('breweryType');
  var inputs = inputDiv.getElementsByTagName('input');
  var breweryTypes = [];

  for (let i = 0; i < inputs.length; i++) {

    if (inputs[i].checked) {
      breweryTypes.push(inputs[i].value);
    }
  }

  //if none selected show all brewery types
  return (breweryTypes.length == 0 )? getAllBreweriesTypes() : breweryTypes;
}

function getFilteredBreweries(breweries, breweryTypes) {
  var filteredResponse = [];
  
  // for each brewery
  for (let i = 0; i < breweries.length; i++) {

    //for each brewerie type
    for (let b = 0; b < breweryTypes.length; b++) {
      if (breweries[i].brewery_type == breweryTypes[b]) {
        filteredResponse.push(breweries[i]);
        break;
      }
    }
  }

  return filteredResponse;
}
//Add back enter key!!
function getBreweries() {
  console.log("Button Clicked");

  const cityChoice = document.getElementById('cityChoice').value;
  const stateChoice = document.getElementById('stateChoice').value;
  const breweryTypes = getBreweriesTypes();

  fetch(`https://api.openbrewerydb.org/breweries?by_city=${cityChoice}&by_state=${stateChoice}&per_page=50,name:asc`)
    .then((response) => response.json())
    .then((response) => {
      const breweries = response;
      const filteredResponse = getFilteredBreweries(breweries, breweryTypes);

      const breweryListEl = document.querySelector('#breweryList');
      breweryListEl.innerHTML = '';
      console.log(filteredResponse);

      //Creates a new element for each attribute we select
      filteredResponse.forEach(function (element) {
        var bName = document.createElement('h1');
        var bType = document.createElement('h4');
        var bStreet = document.createElement('h2');
        var bCity = document.createElement('h3');
        var bState = document.createElement('h3');
        var bWebsite = document.createElement('a');
        var bPhone = document.createElement('a');

        //Style
        bName.style.color = "Red"
        bName.style.borderTop = "2px red solid"
        bName.style.padding = "10px 0px 0px 0px"
        bType.style.margin = "0px auto 10px auto"
        bWebsite.setAttribute("href", element.website_url)
        bPhone.setAttribute("href", `tel:${element.phone}`)
        bPhone.style.display = "block"

        //Inserts data from the JSON
        bName.innerHTML = element.name;
        bStreet.innerHTML = element.street;
        bCity.innerHTML = element.city;
        bState.innerHTML = element.state;
        bWebsite.innerHTML = element.website_url;
        bPhone.innerHTML = element.phone;
        bType.innerHTML = element.brewery_type;


        //appends each element to contain the inserted Data        
        breweryListEl.appendChild(bName);
        breweryListEl.appendChild(bStreet);
        breweryListEl.appendChild(bCity);
        breweryListEl.appendChild(bState);
        breweryListEl.appendChild(bWebsite);
        breweryListEl.appendChild(bPhone);
        breweryListEl.appendChild(bType);

        return filteredResponse
      });

    })
    .catch((err) => {
      console.log(err);
    });
  }