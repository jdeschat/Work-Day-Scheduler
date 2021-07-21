// get today's date
$(document).ready(function () {// tells engine to load html then css first.
    //display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY")); // use of moment.js
    //assign saveBtn click listener for user input and time stamp??
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
        var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

        // set items in local storage.
        localStorage.setItem(time, text);
    });

});