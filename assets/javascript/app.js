var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=M2qGlCIrSZY1ge15FIG17uNEAg9SoxR8&q=falcon&limit=25&offset=0&rating=G&lang=en"

var animals = ['cat','dog','frog','goat','falcon'];


$('#find-animal-giphy').on('click', function(){
    var v = $('#giphy-value').val();

    var u = "https://api.giphy.com/v1/gifs/search?api_key=M2qGlCIrSZY1ge15FIG17uNEAg9SoxR8&q="+ v + "&limit=25&offset=0&rating=G&lang=en";

    console.log(u)

    $.ajax({
        url: u,
        method: "GET"}).then(function(response) {
            
            for (var i=0; i<response.data.length; i++){
                
                var img = $('<img>'); //<img>
                img.attr('src', response.data[i].images.fixed_height.url);
          
                // <img src="">
                $('#show-animal-giphy').append(img);
            }
        });

        var movie = $("#movie-input").val().trim();

        movies.push(movie);
        renderButtons();

        event.preventDefault();
      });

      function renderButtons() {

        
        $("#buttons-view").empty();

        
        for (var j = 0; j < animals.length; j++) {

          // Then dynamicaly generating buttons for each movie in the array.
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class
          a.addClass("animals");
          // Adding a data-attribute with a value of the movie at index i
          a.attr("data-name", animals[j]);
          // Providing the button's text with a value of the movie at index i
          a.text(animals[j]);
          // Adding the button to the HTML
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where one button is clicked
      $("#add-movie").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want

        // This line will grab the text from the input box
        
        // The movie from the textbox is then added to our array
        movies.push(movie);

        // calling renderButtons which handles the processing of our movie array
        
      });