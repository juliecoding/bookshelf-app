import { key } from './config.js'
var url = 'https://www.googleapis.com/books/v1/volumes';
var userInput = $('#userInput').val();
var category = $('#categorySelect').val();

function bookSearch(input, cat) {
  console.log("firing");
  $.ajax({
    method: "GET",
    url: `${url}?q=${cat}:${input}&key=${key}`
  }).then(function(response) {
    console.log(response);
    var returnedBooks = response;
  })
}



$( document ).ready(function() {
  $('#searchButton').on('click', bookSearch(userInput, category));

});
