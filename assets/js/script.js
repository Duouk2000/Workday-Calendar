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