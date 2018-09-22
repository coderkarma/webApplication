/*global $*/
$(document).ready(function () {
    $(".card_register").hide();
    
    $("#sign_up").click(function(){
        $(".card_login").hide();
        $(".card_register").show();
    });
    $("#sign_in").click(function(){
        $(".card_register").hide();
        $(".card_login").show();
    });
    
    $("#login_b").click(function(){
        console.log("Login");
    });
    $("#register_b").click(function(){
        console.log("register");
    });
});