$(document).ready(function () {
    $("#design_paragraph").hide()
    $("#dev_paragraph").hide()
    $("#pm_paragraph").hide()

$("#design_card").click(function () {
    $("#design_image").toggle();
    $("#design_paragraph").toggle();
  });

 $("#dev_card").click(function () {
    $("#dev_image").toggle();
    $("#dev_paragraph").toggle();
  });

  $("#pm_card").click(function () {
    $("#pm_image").toggle();
    $("#pm_paragraph").toggle();
    $(".card-text").css({"text-align": "center"});
    $(".card-title").css({"text-align": "center", "font-weight": "bold"});
  });

  $("#submit").click(function () {
    event.preventDefault()
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (name == '' || email == '' || message == '') {
      alert("Please fill all fields");
    } else {
      alert(name + " we have received your message. Thank you for reaching out to us")
      $("form")[0].reset();

    }
  })
  $(".img_wrap").hover(function () {
    $(this).find("p").toggleClass("img_description_show");
  });
})