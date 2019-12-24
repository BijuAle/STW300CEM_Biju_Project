$("#fileToUpload").on('change', function () {
    let formData = new FormData();
    let files = $("#fileToUpload").get(0).files;
    if (files.length > 0) {
        formData.append("markericon", files[0]);
    }
    $.ajax({
        type: 'POST',
        url: base_url + 'upload',
        contentType: false,
        cache: false,
        processData: false,
        data: formData,
        success: function (data) {
            imageFile = data.filename;
        },
        error: function () {
            alert("Image upload failed!");
        }
    });
});