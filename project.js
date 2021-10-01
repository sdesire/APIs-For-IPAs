function getBreweries () {
console.log("Button Clicked");
  const cityChoice = document.getElementById('cityChoice').value;
  const breweryType = document.getElementById('breweryType').value;
  fetch(`https://api.openbrewerydb.org/breweries?by_city=${cityChoice}&sort=${breweryType}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
