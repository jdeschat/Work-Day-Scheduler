// get today's date
$(document).ready(function () {// tells engine to load html then css first.
    //display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY")); // use of moment.js
    //assign saveBtn click listener for user input and time stamp??
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
        var time = $(this).parent().attr("data-time"); // taken the change from the parent html id attribute

        // set items in local storage.
        localStorage.setItem(time, text);
    });

    // TODO: Local storage


    // change color of blocks based on time
    function checkTime() {
        // determine the current time using moment.js
        var currentHour = moment().hour();
        console.log(currentHour);
        // loop through each hour using Jquery
        $(".time-block").each(function () {
            // var scheduleHour = parseInt($(this).attr("id").split("hour")[1]);
            // INSTEAD: can i make the variable = to "data-time"?
            var scheduleHour = $(this).attr("data-time");
            scheduleHour = parseInt(scheduleHour);
            var colourTextArea = $(this).children(".description");
            console.log(colourTextArea);
            console.log(scheduleHour, currentHour);

            // go through each element one by one
            //remove previous classes assigned to it
            colourTextArea.removeClass("past");
            colourTextArea.removeClass("present");
            colourTextArea.removeClass("future");

            // assign CSS classes that corresponds to the current hour
            if (scheduleHour < currentHour) {
                colourTextArea.addClass("past");
            } else if (scheduleHour === currentHour) {
                colourTextArea.addClass("present");
            } else if (scheduleHour > currentHour) {
                colourTextArea.addClass("future");
            }
        });
    }
    checkTime();
});



// getting current hours from timestamp;
// var date = new Date();
// var time = date.getHours();

// once document is loaded and ready
// $(document).ready(function () {
//     var rows = $("div.row")
