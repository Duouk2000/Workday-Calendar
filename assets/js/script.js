$(document).ready(function() {
    // Set current date
    $("#currentDay").text(dayjs().format("dddd, MMMM D"));
    // console logging to check correct
    var currentDay = document.getElementById('currentDay')
    if (currentDay){
        console.log(currentDay)
    } else {
        console.log('not working!')
    }
    })
// console logging time in an hourly format
    var currentHour = dayjs().format('H');
    console.log(currentHour); 

    for (var hour = 9; hour <= 21; hour++) {
        var blockHour = hour;
    
    if (blockHour < parseInt(currentHour)) {
        console.log(blockHour + ' is prior to the current time');
        $('.time-block:eq(' + (hour - 9) + ')').toggleClass('past');
    } else if (blockHour === parseInt(currentHour)) {
        console.log(blockHour + ' is the current time');
        $('.time-block:eq(' + (hour - 9) + ')').toggleClass('present');
    } else {
        console.log(blockHour + ' is after the current time');
        $('.time-block:eq(' + (hour - 9) + ')').toggleClass('future');
    }
    }
    