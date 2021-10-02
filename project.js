function getBreweriesTypes () {
  var inputDiv = document.getElementById('breweryType');
  var inputs = inputDiv.getElementsByTagName('input');

  var breweryTypes = [];

  for (let i = 0; i < inputs.length; i++) {

      if(inputs[i].checked){
        breweryTypes.push(inputs[i].value);
      } 
  }
  return breweryTypes;
}

function getFilteredBreweries(breweries, breweryTypes){
  var filteredResponse = [];

    // for each brewery
    for (let i = 0; i < breweries.length; i++) {

      //for each brewerie type
      for (let b = 0; b < breweryTypes.length; b++) {
        if(breweries[i].brewery_type == breweryTypes[b]){
          filteredResponse.push(breweries[i]);
          break;
        }   
      } 
    }

    return filteredResponse;
}


function getBreweries () {
console.log("Button Clicked");

const cityChoice = document.getElementById('cityChoice').value;
  const breweryTypes = getBreweriesTypes();

  fetch(`https://api.openbrewerydb.org/breweries?by_city=${cityChoice}&per_page=50`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const breweries = response;
      const filteredResponse = getFilteredBreweries(breweries, breweryTypes);

      console.log(filteredResponse);
      return filteredResponse;
    })
    .catch((err) => {
      console.log(err);
    });
}

