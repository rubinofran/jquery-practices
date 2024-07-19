// Anonymous function to stylize
$(function(){

    // Found by id
    $("p#secondP").css({"background-color":"green"})

    // Found by class
    $("p.thirdP").css({"background-color":"blue"})

})

// Anonymous function to use events (arrow function variant)
$(() => {

    // Some events: fadeOut, fadeIn, slideDown, slideUp, animate, text, html, append, after, before, remove, empty, addClass, removeClass, toggleClass

    // Show - Hide events
    $("h3").mouseenter(() => $("ul").show())
    $("h3").mouseleave(() => $("ul").hide())

    // Using buttons - click event
    $("#firstBtn").click(function(){
        // Alert event
        alert("Hello")
    })

    $("#secondBtn").click(function(){
        $("h2").hide(); 
    })

    $("#thirdBtn").click(function(){
        $("h2").show(); 
    })

    $("#fourthBtn").click(function(){
        // Show title attribute value 
        alert($("#secret-msg").attr("title")); 
    })

});

// Import json file - Using loop
$.getJSON("card.json", function(obj) {
    console.log(obj)
    $.each(obj, function(key,val) {
        // console.log(key + ": " + val)
        $("ul#info").append(`<li>${key}: ${val}</li>`)
    });
});
