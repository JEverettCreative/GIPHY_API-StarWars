$(document).on("load", function(){
    // Declare any necessary global variables

    // Function loadTopics to convert array of topics into buttons on the page
        // Variable to hold value of text from the array (also user input later)
        // Buttons should be added to divs with col-lg-1 col-md-2 and col-sm-3
        // Assign a class of .topic-btn
            // Divs appended to #button-container
    
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