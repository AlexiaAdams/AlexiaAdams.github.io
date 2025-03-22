// Starting burger menu
if ($(window).width() > 1160) {
  $("#nav-bar").removeClass("hidden");
  $("#burger").addClass("hidden");
}
else {
  $("#nav-bar").addClass("hidden");
  $("#burger").removeClass("hidden");
  $("#burger").removeClass("selected");
}

$(window).resize(function () {
  if ($(window).width() < 1160) {
    $("#nav-bar").addClass("hidden");
  }
  else {
    $("#nav-bar").removeClass("hidden");
  }
});

// Adjusted burger menu
$(window).resize(function () {
  if ($(window).width() < 1160) {
    $("#burger").removeClass("hidden");
    $("#burger").removeClass("selected");
  }
  else {
    $("#menu").addClass("hidden");
    $("#burger").addClass("hidden");
  }
});


// Hamburger click links
$("#burger").click(function () {
  if ($("#menu").hasClass("hidden")) {
    $("#menu").removeClass("hidden");
    $("#burger").addClass("selected");
  }
  else {
    $("#menu").addClass("hidden");
    $("#burger").removeClass("selected");
  }
});