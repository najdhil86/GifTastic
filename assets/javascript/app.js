var animals = ["cats", "dogs", "mice", "lion", "goat", "falcon","pig","snake","rabbit","lion","bats","rats","mouse"];
  
function createButtons() {

  $("#buttons-view").empty();

  for (var i = 0; i < animals.length; i++) {
    
    var b = $("<button>");
    // Adding a class
    b.addClass("animal");
    // Adding a data-attribute with a value of the movie at index i
    b.attr("data-name", animals[i]);

    b.attr("class", "btn btn-primary");

    b.attr("id","animal-button")
    // Providing the button's text with a value of the movie at index i
    b.text(animals[i]);
    // Adding the button to the HTML
    $("#buttons-view").append(b);
  }
}

createButtons();

$(document).on('click', '#animal-button', function(){

    var animalName = $(this).attr("data-name");
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animalName + "&api_key=M2qGlCIrSZY1ge15FIG17uNEAg9SoxR8&limit=10";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function(response){

      $("#animal-giphys").empty();
      
      var results = response.data;

      for (var i = 0; i < results.length; i++) {

        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          
          var gifDiv = $("<div>");

          // gifDiv = gifDiv.attr("class", "col");
                    
          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          // Creating an image tag
          var animalImage = $("<img>");

          // Giving the image tag an src attribute of a proprty pulled off the
          // result item
          animalImage.attr("src", results[i].images.fixed_height_still.url);

          animalImage.attr("data-still", results[i].images.fixed_height_still.url);

          animalImage.attr("data-animate",results[i].images.fixed_height.url);

          animalImage.attr("id",'gif');

          // Appending the paragraph and personImage we created to the "gifDiv" div we created
          gifDiv.append(p);
          gifDiv.append(animalImage);

          // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
          $("#animal-giphys").prepend(gifDiv);
        }
      }

    })
  });

  // This function handles events where one button is clicked
  $("#add-animal").on("click", function() {

    var v = $("#animal-input").val();

    animals.push(v);

    $("#animal-input").val("");

    createButtons();

    event.preventDefault();
    
})

// This function is control playing the gifs from giphy

$(document).on("click", "img", function () {
  //selecting data state

  console.log("hi");

  var state = $(this).attr("data-state");

  if (state === "still") {
    
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});
