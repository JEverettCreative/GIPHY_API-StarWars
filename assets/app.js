$(document).ready( function(){
    // Declare any necessary global variables
    var topics = ["luke skywalker", "han solo", "darth vader", "darth maul", "princess leia", 
                "kylo ren", "chewbacca", "r2-d2", "obi-wan", "boba fett", "mace windu", "anakin"];
    

    // Function loadTopics to convert array of topics into buttons on the page
    function loadTopics() {
        $("#button-container").empty();

        for(var i = 0; i < topics.length; i++) {
            var buttonText = topics[i];
            // Create a div to control flow and contain button
            var buttonWrap = $("<div>").attr("class", "col-lg-1 col-md-2 col-sm-3 topic-btn");
            buttonWrap.attr("value", buttonText);
            // Create a button. Add text from array and classes for styling and reference
            var button = $("<button>").text(buttonText);
            button.attr("class", "btn btn-primary");
            // Append the button to the div, then the div to the container on page
            $(buttonWrap).append(button);
            $("#button-container").append(buttonWrap);
        }
    }

    // Call the buttons to the page the first time
    loadTopics();

    // Function to addButton based off user input into the #user-input field
        // Call the loadTopics function again to ensure btn is of the same class
    $("#create-btn").on("click", function(){

        event.preventDefault();
        var userInput = $("#user-input").val().trim();
        
        if(userInput != "") {
            topics.push(userInput);
            loadTopics();
        }

    })

    // Function for on "click" event of the .topic-btn - AJAX call
    $(document).on("click", ".topic-btn", function(){
        var searchTerm = $(this).attr("value");
        
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=I8gqUfs7wgNfDDZcbDE2PcijfYStSblZ&limit=10";

       $.ajax({
           url: queryURL,
           method: "GET"
       }).then(function(response){
           console.log(response);
           // Create a for loop to iterate through the 10 results
           var results = response.data;

           for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>").attr("class", "col-sm-12 col-lg-4 gif-image");
            
                var rating = $("<p>").text(results[i].rating);

                var downloadBtn = $("<a>").text("Download GIF!");
                downloadBtn.attr("class", "download-btn btn-warning");
                downloadBtn.attr("href", results[i].images.fixed_height.url);
                downloadBtn.attr("download", searchTerm + "-" + [i]);

                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height.url);

                $(gifDiv).append(gifImage);
                $(gifDiv).append(rating);
                $(gifDiv).append(downloadBtn);
            // Prepend the gif divs in the container
                $("#gif-container").prepend(gifDiv);

           }
       })
    })
                // Rating, fixed_height_still (once MVP, add download link)

    // Create an on "click" event for the gifs to check if the data-state is still or animate
        // If still, animate, if animate, then change to still

    // Notes: Clicking another button should prepend without deleting previous gifs


















});