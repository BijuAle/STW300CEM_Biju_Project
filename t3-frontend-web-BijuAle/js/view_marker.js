$(function() {
  $.ajaxSetup({
    xhrFields: {
      withCredentials: true
    }
  });

  $(document).ready(function() {
    $(".modal-body").load("../pages/update_marker.html");
  });

  let tblBody = $("#tblbody");
  let base_url = "http://localhost:3000/";

  function rowTemplate(marker) {
    let oneRow ="<tr><td>" 
    + marker.lat +"</td><td>" 
    + marker.lng +"</td><td>" 
    + marker.markerInfo +"</td";
    if (marker.markerIconImage !== "") {
      oneRow +"<td><img src= " +base_url +"uploads/" +marker.image +" width='60' /></td>";
    } else {
      oneRow += "<td> No Image </td>";
    }
    oneRow +='<td><button type="button" class="btn btn-danger delete" marker_id=' +marker._id +">Del</button></td>";
    oneRow +='<td><button type="button" class="btn btn-danger update" marker_id=' +marker._id +">Update</button></td></tr>";
    return oneRow;
  }

  $.ajax({
    type: "GET",
    url: base_url + "markers",
    success: function(markers) {
      let myRows = [];
      $.each(markers, function(index, marker) {
        myRows.push(rowTemplate(marker));
      });
      tblBody.append(myRows);
    },
    error: function() {
      alert("Something went wrong!");
    }
  });

  tblBody.on("click", ".delete", function() {
    $.ajax({
      type: "DELETE",
      url: base_url + "markers/" + $(this).attr("marker_id"),
      success: function() {
        location.reload();
      }
    });
  });


  tblBody.on('click', '.update', function () {
    $.ajax({
        type: "GET",
        url: base_url + 'markers/' + $(this).attr('marker_id'),
        success: function (marker) {
            $("#btn_modal").click();
            document.forms["form_update_marker"]["lat"].value = marker.lat;
            document.forms["form_update_marker"]["lng"].value = marker.lng;
            document.forms["form_update_marker"]["markerInfo"].value = marker.markerInfo;
            document.forms["form_update_marker"]["markerId"].value = marker._id;
        },
        error: function () {
            alert("Something went wrong!!");
        }
    });
});
});
