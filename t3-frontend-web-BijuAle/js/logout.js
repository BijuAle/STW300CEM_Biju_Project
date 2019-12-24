$(function() {
  $.ajaxSetup({
    xhrFields: {
      withCredentials: true,
      crossDomain: true
    }
   
  });

  let base_url = "http://localhost:3000/";

  

  $(".header").on("click", '#logout-me', function(e) {
    e.preventDefault();
    $.ajax({
      type: "GET",
      url: base_url + "users/logout",
      success: function(user) {
        alert("You are now logged out.");
        window.location = "index.html";
      },
      error: function(err) {
        alert("wrong");
      }
    });
  });
});
