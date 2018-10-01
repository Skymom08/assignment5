// Step 1: Get user's input from the input box when update is clicked
$('#submit-btn').click(function(event) {
    event.preventDefault()
    var city = $('#city-type').val()
    console.log(city)
    if (city === "new york city" || city === "nyc"|| city === "new york") {
        $("body").css('background-image', "url(images/nyc.jpg")
    }
})
$('#submit-btn').click(function(event) {
    event.preventDefault()
    var city = $('#city-type').val()
    console.log(city)
    if (city === "san francisco" || city === "SF"|| city === "Bay Area") {
        $("body").css('background-image', "url(images/sf.jpg")
    }
})
$('#submit-btn').click(function(event) {
    event.preventDefault()
    var city = $('#city-type').val()
    console.log(city)
    if (city === "Los Angeles" || city === "LA"|| city === "LAX") {
        $("body").css('background-image', "url(images/la.jpg")
    }
})
$('#submit-btn').click(function(event) {
    event.preventDefault()
    var city = $('#city-type').val()
    console.log(city)
    if (city === "Austin" || city === "ATX") {
        $("body").css('background-image', "url(images/austin.jpg")
    }
})
$('#submit-btn').click(function(event) {
    event.preventDefault()
    var city = $('#city-type').val()
    console.log(city)
    if (city === "Sydney" || city === "SYD") {
        $("body").css('background-image', "url(images/sydney.jpg")
    }
})
// Step 2: Change background image to chosen city
 // use if statement to see if user input is the same as ny
    // change background image on the body to ny
