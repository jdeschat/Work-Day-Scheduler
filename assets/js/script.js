// get today's date
$(document).ready(function () {// tell engine to load html then css first.
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

    // Save items to Local storage
    for (let i = 9; i < 18; i++) {
        var storedTask = localStorage.getItem(i);
        console.log(storedTask);
        var dataTime = $(`div[data-time=${i}]`).children(".description");
        dataTime.val(storedTask);
        console.log(dataTime);
    }

    // change color of blocks based on time
    function checkTime() {
        // determine the current time using moment.js
        var currentHour = moment().hour();
        console.log(currentHour);
        // loop through each hour using Jquery
        $(".time-block").each(function () {
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
