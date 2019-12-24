$(function() {
  $.ajaxSetup({
    xhrFields: {
      withCredentials: true
    }
  });

  let base_url = "http://localhost:3000/";
  $("#btn_add_marker").on("click", function(e) {
    e.preventDefault();

    let marker = {
      lat: $("#lat").val(),
      lng: $("#lng").val(),
      markerInfo: $("#markerInfo").val()
    };
    $.ajax({
      type: "POST",
      url: base_url + "markers/",
      data: marker,
      dataType: "json",
      success: function(user) {
        console.log(user);
        alert("You will be redirected to another page.");
        window.location = "dashboard.html";
      },
      error: function() {
        alert("Fill all the form fields!");
      }
    });
  });
});
