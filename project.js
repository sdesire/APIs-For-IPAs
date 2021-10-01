const breweryType = ["micro", "planning", "nano"];

function getBreweriesTypes () {

}


function getBreweries () {
console.log("Button Clicked");
<<<<<<< HEAD

const cityChoice = document.getElementById('cityChoice').value;

  fetch(`https://api.openbrewerydb.org/breweries?by_city=${cityChoice}`)
=======
  const cityChoice = document.getElementById('cityChoice').value;
  const breweryType = document.getElementById('breweryType').value;
  fetch(`https://api.openbrewerydb.org/breweries?by_city=${cityChoice}&sort=${breweryType}`)
>>>>>>> 5bd93acd16f84b7f846ad243d033d84713efff45
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
};
