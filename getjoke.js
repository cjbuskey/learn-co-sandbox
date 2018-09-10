$(document).ready(() => {getJokeListener()});

function getJokeListener() {
  $("#get-joke").on("click", getJoke)
}

const getJoke = () => {
  let headers = new Headers({'Accept': 'application/json'})
  let request = new Request('https://icanhazdadjoke.com/', {headers: headers});
  fetch(request)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    putJokeOnPage(json);
  });
}

const putJokeOnPage = (jk) => {
  $("#joke").html(jk.joke)
} 
