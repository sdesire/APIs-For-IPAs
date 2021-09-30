const myButton = document.querySelector("#btn");
myButton.addEventListener("click", function (event) {
  console.log("Button Clicked");
  fetch("https://api.openbrewerydb.org/breweries")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
});
