function getBreweries () {
console.log("Button Clicked");
  fetch(`https://api.openbrewerydb.org/breweries?by_state=${cityChoice}&sort=${breweryType},name:${ascDesc}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}