/*global $*/
$(document).ready(function () {
    $(".card_register").hide();
    $(".card_login").animate({
        top: '50%'
    }, "slow");
    
    $("#sign_up").click(function(){
        $(".card_login").hide(200);
        $(".card_register").show(200);
    });
    $("#sign_in").click(function(){
        $(".card_register").hide(200);
        $(".card_login").show(200);
    });
    
    $("#login_b").click(function(){
        console.log("Login");
    });
    $("#register_b").click(function(){
        console.log("register");
    });
});