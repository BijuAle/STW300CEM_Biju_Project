$(function() {
  $.ajaxSetup({
    xhrFields: {
      withCredentials: true
    }
  });

  let tblBody = $("#tblbody");
  let base_url = "http://localhost:3000/";
  var logged_in_user_id ="";

  $.ajax({
    type: "GET",
    url: base_url + "users",
    success: function(logged_in_user) {
    logged_in_user_id = logged_in_user._id;
      document.forms["form_update_profile"]["firstName"].value = logged_in_user.firstName;
      document.forms["form_update_profile"]["lastName"].value = logged_in_user.lastName;
      document.forms["form_update_profile"]["address"].value = logged_in_user.address;
      document.forms["form_update_profile"]["email"].value = logged_in_user.email;
      document.forms["form_update_profile"]["firstName"].select();
    },
    error: function() {
      alert("Something went wrong!");
    }
  });

  $("#btn_update_profile").on("click", function(e) {
    e.preventDefault();

    let user = {
      firstName:document.forms["form_update_profile"]["firstName"].value,
      lastName:document.forms["form_update_profile"]["lastName"].value,
      addresss:document.forms["form_update_profile"]["address"].value,
      email:document.forms["form_update_profile"]["email"].value,
      password:document.forms["form_update_profile"]["password"].value
    };
    $.ajax({
      type: "PUT",
      url: base_url + "users/"+logged_in_user_id,
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
