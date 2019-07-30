// Initial array of movies
var animals = ["cats", "dogs", "mice", "lion", "goat", "falcon"];
  
// Function for displaying movie data
function makeButtons() {

  // Deleting the movie buttons prior to adding new movie buttons
  // (this is necessary otherwise we will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of movies
  for (var i = 0; i < animals.length; i++) {

    var button = $("<button>");

    button.addClass("animal");

    button.attr("data-name", animals[i]);

    button.attr("id", "animalID");

    button.text(animals[i]);

    $("#buttons-view").append(button);
  }
}

$("#add-animal").on("click", function(event) {

  event.preventDefault();

  
  var animal_value = $("#animal-input").val().trim();
  
  animals.push(animal_value);

  makeButtons();

});

makeButtons();

$(document).on('click', 'animalID', function(){

  debugger;

  console.log("hi");

  // var animal_text = $(this).val();

  // console.log(animal_text);

  // var url = "https://api.giphy.com/v1/gifs/search?api_key=M2qGlCIrSZY1ge15FIG17uNEAg9SoxR8&q=" + animal_text + "&limit=25&offset=0&rating=G&lang=en";

  // console.log(url);

  // event.preventDefault();


  // $.ajax({

  //   url: url,
  //   method: "GET"
  // }).then(function(response) {


  //   console.log(response);
    
  //   var img = $('<img>');

  //   img.attr('src', response.data[0].images.downsized_large.url)

  //   $('#animal-giphys').append(img);
  //   debugger;
  // });


})