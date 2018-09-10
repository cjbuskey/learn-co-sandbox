$(document).ready(function() {
  // listen for the user to click the button
  // when the user clicks the button, send an AJAX request to get the repos from the URL
  // when we get the response back from the web request, we'll list the repos
  $("#get-repos").on("click", buttonClickCallback)
}
)

function buttonClickCallback() {
  // when the user clicks the button, send an AJAX request to get the repos from the URL
  let repoInput = $("#repo-name").val();
 // $.ajax({
 //    url: `https://api.github.com/users/${repoInput}/repos`,
 //    data: "json",
 //  success: successFunction,
 //  error: errorFunction
 // })


fetch(`https://api.github.com/users/${repoInput}/repos`)
  .then(successFunction)
  .then(anotherSuccessFunction)
  .catch(failureFunction);
}

function successFunction(response) {
  return response.json();
}

function anotherSuccessFunction(response) {
  response.forEach(function(repo) {
    $("ul#repo-results").append("<li>" + repo.name + "</li>")
  })
}

function errorFunction(response) {
  alert("Sorry, something went wrong...");
}