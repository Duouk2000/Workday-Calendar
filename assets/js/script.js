$(document).ready(function() {
    // Set current date & time
    $("#currentDay").text(dayjs().format("dddd, MMMM D, h:mm A"));
 
    // Log current time in an hourly format to the console
    var currentHour = dayjs().format('H');
    console.log(currentHour);

    // Loop through hours from 9 to 17 (inclusive)
    for (var hour = 9; hour <= 17; hour++) {
        var blockHour = hour;
        // Create a key for each hour in local storage
        var storageKey = "hour-" + hour;
        // Retrieve data from local storage
        var savedData = localStorage.getItem(storageKey);
        // Select the textarea for the current hour
        var textarea = $('.time-block:eq(' + (hour - 9) + ')').find('textarea');
        // Check if there is saved data for the current hour
        if (savedData) {
            // Set the textarea value to the saved data
            textarea.val(savedData);
        }

        // Compare blockHour with currentHour and update element styling accordingly
        if (blockHour < parseInt(currentHour)) {
            // If blockHour is earlier than the current hour, add the 'past' class
            $('.time-block:eq(' + (hour - 9) + ')').toggleClass('past');
        } else if (blockHour === parseInt(currentHour)) {
            // If blockHour is the same as the current hour, add the 'present' class
            $('.time-block:eq(' + (hour - 9) + ')').toggleClass('present');
        } else {
            // If blockHour is later than the current hour, add the 'future' class
            $('.time-block:eq(' + (hour - 9) + ')').toggleClass('future');
        }
    }

    // Save data to local storage when the save button is clicked
    // Attach a click event listener to elements with the class 'saveBtn'
    $(".saveBtn").on("click", function() {
        // Find the closest ancestor with the class 'time-block' and get its ID
        var hour = $(this).closest('.time-block').attr('id');
        // Create a unique storage key based on the hour
        var storageKey = "hour-" + hour;
        // Retrieve the value of the textarea element which is a sibling of the clicked button
        var textareaValue = $(this).siblings('.description').val();

        // Save the textarea value to local storage using the unique storage key
        localStorage.setItem(storageKey, textareaValue);
    });
});