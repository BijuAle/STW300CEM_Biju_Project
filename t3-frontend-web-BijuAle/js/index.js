$(function() {
  $.ajaxSetup({
    xhrFields: {
      withCredentials: true
    }
  });

  let base_url = "http://localhost:3000/";

  $("#btn_login").on("click", function(e) {
    e.preventDefault();
    let user = {
      username: $("#username_l").val(),
      password: $("#password_l").val()
    };

    $.ajax({
      type: "POST",
      url: base_url + "users/login",
      data: user,
      dataType: "json",
      success: function(user) {
        console.log(user);
        alert("You will be redirected to another page.");
        window.location = "dashboard.html";
      },
      error: function(err) {
        alert("Fill all the form fields!");
      }
    });
  });

  $("#btn_register").on("click", function(e) {
    e.preventDefault();

    let user = {
      firstName:$("#firstName_r").val(),
      lastName:$("#lastName_r").val(),
      addresss:$("#address_r").val(),
      email:$("#email_r").val(),
      username: $("#username_r").val(),
      password: $("#password_r").val()
    };
    console.log(user);
    $.ajax({
      type: "POST",
      url: base_url + "users/signup",
      data: user,
      dataType: "json",
      success: function(user) {
        console.log(user);
        alert("You will be redirected to another page.");
        window.location = "index.html";
      },
      error: function() {
        alert("Fill all the form fields!");
      }
    });
  });
});
