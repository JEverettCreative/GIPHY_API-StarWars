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
    
    $("#create-btn").on("click", function(){

        event.preventDefault();
        var userInput = $("#user-input").val().trim();
        
        if(userInput != "") {
            topics.push(userInput);
            loadTopics();
        }

    })
    // Function to addButton based off user input into the #user-input field
        // Converts value of input text into button text and value
        // Button should be identical div and class to loadTopics function above
            // Appended to #button-container

    // Function for on "click" event of the .topic-btn
        // Contains the queryURL for GIPHY plus var that contains the value of this button
            // Adds API key and limit=10
        // AJAX GET method call 
            // Filter through the resulting object and pull the following:
                // Rating, fixed_height_still (once MVP, add download link)
            // Create a for loop to go through these, get that info, and create a div, image, and p
            // tag to then prepend to the #gif-container

    // Create an on "click" event for the gifs to check if the data-state is still or animate
        // If still, animate, if animate, then change to still

    // Notes: Clicking another button should prepend without deleting previous gifs


















});