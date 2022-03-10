$(document).ready(function() {

    // process the form
    $('form#gform').submit(function(event) {

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'name'              : $('input[name=name]').val(),
            'email'             : $('input[name=email]').val(),
            'phone'             : $('input[name=phone]').val(),
            'address'              : $('input[name=address]').val(),
            'city'             : $('input[name=city]').val(),
            'state'             : $('input[name=state]').val(),
            'zip'              : $('input[name=zip]').val(),
            'description'             : $('textarea[name=description]').val()
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'https://script.google.com/macros/s/AKfycbzViAqd-5_ueHqG4an2gS5DfuwXankozf6UI2_uZw/exec', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
                        encode          : true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data);

                // here we will handle errors and validation messages
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});

function toggleForm() {
  $("div#form-holder").toggle();
  $("div#thank-you").toggle();
}

function openNav(source) {
    console.log("source: "+source)
    $("#overlayImage").attr("src", source);
    document.getElementById("myNav").style.display = "block";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.display = "none";
}

//comment

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function startTimer(){
  setInterval(function(){plusSlides(1)}, 5000);
}

window.onload = function() { setInterval(function(){plusSlides(1)},3000)};

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
