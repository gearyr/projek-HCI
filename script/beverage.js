$(".content-box p").hide();

$("#americano").click(function(){
    $("#americano-p").slideToggle();
    $("#americano-i").toggleClass("down"); 
});

$("#cafe-latte").click(function(){
    $("#cafe-latte-p").slideToggle();
    $("#cafe-latte-i").toggleClass("down");
});

$("#cafe-mocha").click(function(){
    $("#cafe-mocha-p").slideToggle();
    $("#cafe-mocha-i").toggleClass("down");
});

$("#cappucino").click(function(){
    $("#cappucino-p").slideToggle();
    $("#cappucino-i").toggleClass("down");
});

$("#cold-brew").click(function(){
    $("#cold-brew-p").slideToggle();
    $("#cold-brew-i").toggleClass("down");
});

$("#egg-yolk").click(function(){
    $("#egg-yolk-p").slideToggle();
    $("#egg-yolk-i").toggleClass("down");
});

$("#espresso").click(function(){
    $("#espresso-p").slideToggle();
    $("#espresso-i").toggleClass("down");
});

$("#frappe").click(function(){
    $("#frappe-p").slideToggle();
    $("#frappe-i").toggleClass("down");
});
