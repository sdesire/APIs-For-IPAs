const breweryType = ["micro", "planning", "nano"];

function getBreweriesTypes () {

}


function getBreweries () {
console.log("Button Clicked");

const cityChoice = document.getElementById('cityChoice').value;

  fetch(`https://api.openbrewerydb.org/breweries?by_city=${cityChoice}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const breweries = response;
      var filteredResponse = [];

      // for each brewery
      for (let i = 0; i < breweries.length; i++) {

        //for each brewerie type
        for (let b = 0; b < breweryType.length; b++) {
          if(breweries[i].brewery_type === breweryType[b]){
            filteredResponse.push(breweries[i]);
            console.log(breweries[i].brewery_type);
          }   
        }
        
      }
      console.log(breweries);
    })
    .catch((err) => {
      console.log(err);
    });
}

