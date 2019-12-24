$(function() {
  $.ajaxSetup({
    xhrFields: {
      withCredentials: true
    }
  });

  let base_url = "http://localhost:3000/";

  $("#btn_update_marker").on("click", function(e) {
    e.preventDefault();

    marker_id = $("#markerId").val();
    let marker = {
      lat: $("#lat").val(),
      lng: $("#lng").val(),
      markerInfo: $("#markerInfo").val()
    };

    $.ajax({
      type: "PUT",
      url: base_url + "markers/"+marker_id,
      data: marker,
      dataType: "json",
      success: function(marker) {
        alert("You will be redirected to another page.");
        window.location = "view_marker.html";
      },
      error: function(err) {
        alert("Fill all the form fields!");
      }
    });
  });
});
