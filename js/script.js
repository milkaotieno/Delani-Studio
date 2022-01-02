$(document).ready(function(e){

    $('.design-text, .dev-text, .pdt-mgt-text').hide();
    $('.design').click(function(){
        $('.design-image, .design-text').fadeToggle();
    });
    $('.dev').click(function () {
        $('.dev-image, .dev-text').fadeToggle();
    });
    $('.pdt-mgt').click(function () {
        $('.pdt-mgt-image, .pdt-mgt-text').fadeToggle();
    });

    $('#contactUsForm').submit(function(event){
        let userName = $('#userName').val();
        let userEmail = $('#userEmail').val();
        let userMessage = $('#userName').val();
        alert("Hello " + userName + ". We have received your message. Thank you for contacting us.")

        event.preventDefault();
    });

    // Portfolio hover effect.
    $('.img-ovly-1, .img-ovly-2, .img-ovly-3, .img-ovly-4, .img-ovly-5, .img-ovly-6, .img-ovly-7, .img-ovly-8').hide();

    $('.pr-1').hover(function(){
        $('.img-ovly-1').fadeIn();
    }, function(){
        $('.img-ovly-1').fadeOut();
    });

    $('.pr-2').hover(function () {
        $('.img-ovly-2').fadeIn();
    }, function () {
        $('.img-ovly-2').fadeOut();
    });

    $('.pr-3').hover(function () {
        $('.img-ovly-3').fadeIn();
    }, function () {
        $('.img-ovly-3').fadeOut();
    });

    $('.pr-4').hover(function () {
        $('.img-ovly-4').fadeIn();
    }, function () {
        $('.img-ovly-4').fadeOut();
    });

    $('.pr-5').hover(function () {
        $('.img-ovly-5').fadeIn();
    }, function () {
        $('.img-ovly-5').fadeOut();
    });

    $('.pr-6').hover(function () {
        $('.img-ovly-6').fadeIn();
    }, function () {
        $('.img-ovly-6').fadeOut();
    });

    $('.pr-7').hover(function () {
        $('.img-ovly-7').fadeIn();
    }, function () {
        $('.img-ovly-7').fadeOut();
    });

    $('.pr-8').hover(function () {
        $('.img-ovly-8').fadeIn();
    }, function () {
        $('.img-ovly-8').fadeOut();
    });


    e.preventDefault();
});