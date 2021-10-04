
  var typesB = ['micro', 'nano', 'regional', 'brewpub', 'large', 'planning', 'bar', 'contract', 'proprietor']

function getBreweriesTypes() {
  var inputDiv = document.getElementById('breweryType');
  var inputs = inputDiv.getElementsByTagName('input');
  var breweryTypes = [];

  for (let i = 0; i < inputs.length; i++) {

    if (inputs[i].checked) {
      breweryTypes.push(inputs[i].value);
    }
  }
  return breweryTypes;
  //add option that if none are selected all are displayed**
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
        var bName = document.createElement('p');
        var bType = document.createElement('p');
        var bStreet = document.createElement('p');
        var bCity = document.createElement('p');
        var bState = document.createElement('p');
        var bWebsite = document.createElement('a');
        var bPhone = document.createElement('p');

        //Style
        bName.style.color = "Red"
        bPhone.style.margin = "0px auto 10px auto"
        bWebsite.setAttribute("href", element.website_url)

        //Inserts data from the JSON
        bName.innerHTML = element.name;
        bType.innerHTML = element.brewery_type;
        bStreet.innerHTML = element.street;
        bCity.innerHTML = element.city;
        bState.innerHTML = element.state;
        bWebsite.innerHTML = element.website_url;
        bPhone.innerHTML = element.phone;

        //appends each element to contain the inserted Data        
        breweryListEl.appendChild(bName);
        breweryListEl.appendChild(bType);
        breweryListEl.appendChild(bStreet);
        breweryListEl.appendChild(bCity);
        breweryListEl.appendChild(bState);
        breweryListEl.appendChild(bWebsite);
        breweryListEl.appendChild(bPhone);

        return filteredResponse
      });

    })
    .catch((err) => {
      console.log(err);
    });
}