
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=M2qGlCIrSZY1ge15FIG17uNEAg9SoxR8&q=falcon&limit=25&offset=0&rating=G&lang=en"

        $('#find-animal-giphy').on('click', function(){
        var v = $('#giphy-value').val();

        var u = "https://api.giphy.com/v1/gifs/search?api_key=M2qGlCIrSZY1ge15FIG17uNEAg9SoxR8&q="+ v + "&limit=25&offset=0&rating=G&lang=en";

        console.log(u)

        $.ajax({
          url: u,
          method: "GET"
        }).then(function(response) {

            
            for (var i=0; i<response.data.length; i++){
                var img = $('<img>'); //<img>
                img.attr('src', response.data[i].images.fixed_height.url);
          
                // <img src="">
                $('#show-animal-giphy').append(img);
            }
        });

        event.preventDefault();
      });



    //     $.ajax({

    //   url: queryURL,
    //   method: "GET"

    // }).then(function(response) {
    //   // debugger;
    //   console.log(response);
    //   for (var i=0; i<response.data.length; i++){
    //       var img = $('<img>'); //<img>
    //       img.attr('src', response.data[i].images.downsized_large.url);
    //       // <img src="">

    //       $('div').append(img);
    //   }

    // });