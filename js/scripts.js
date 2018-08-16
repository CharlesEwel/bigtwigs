$(document).ready(function() {
    $("form#consultation").submit(function(event) {
        var name = $("input#name").val();
        $("div#form-holder").toggle();
        $("div#thank-you").toggle();
        event.preventDefault();
    });

/* Open */
});

function openNav(source) {
    console.log("source: "+source)
    $("#overlayImage").attr("src", source);
    document.getElementById("myNav").style.display = "block";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.display = "none";
}
