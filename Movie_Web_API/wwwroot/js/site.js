// Web API Address
let webAPIUrl = 'api/Movies';

// Function for call API to Load All Details of Movie
function loadAllMovieDetails() {
    // Generate AJAX request for collecting All Tutorial Details
    $.ajax({
        type: "GET",
        url: webAPIUrl,
        cache: false,
        success: function (data) {
            // Capture the reference of Table Body present in Home Page
            const tableBody = $("#movie_details");

            $(tableBody).empty(); // Empty the content of Previous Table Body 

            if (data.length == 0) { // If there is no data present
                // Prepare a row for display no data
                const tr = $("<tr></tr>")
                    .append('<td colspan="6" align="center">No Movie Details</td>');
                // Add table row in table body
                tr.appendTo(tableBody);
            } else {
                // Iterate all JSON data
                $.each(data, function (key, item) {
                    // prepare a row with table column with data 
                    const tr = $("<tr></tr>")
                        .append($("<td></td>").text(item.movieName))
                        .append($("<td></td>").text(item.director))
                        .append($("<td></td>").text(item.summary))
                        .append($("<td></td>").text(item.rating))
                        .append($("<td></td>").append('<button class="btn btn-secondary" data-toggle="modal" data-target="#movie_update">Edit</button>')
                            .on("click", function () {
                                // Call get Movie Details For Edit
                                getMovie(item.movieID);
                            })
                        )
                        .append($("<td></td>").append('<button class="btn btn-warning">Delete</button>')
                            .on("click", function () {
                                // Call remove Movie from Database
                                removeMovie(item.movieID);
                            })
                        );
                    // Add The table row at the end of table body
                    tr.appendTo(tableBody)
                });
            }
        }
    });
}

// This function used to save Movie Details using Web API
function saveMovie() {
    // Collect Input Details 
    let movie_name = $('#movie_name').val();
    let rating1 = parseInt($('#rating').val());
    let summary1 = $('#summary').val();
    let directors = $("#directors").val();

    // Save Details in Movie JSON Data
    let movie = {
        moviename: movie_name,
        rating: rating1,
        summary: summary1,
        director: directors
    };

    // Request the Web API for Insertion
    $.ajax({
        type: "POST",
        url: webAPIUrl,
        data: JSON.stringify(movie),
        contentType: "application/json; charset=utf-8"
    }).done(function (response) {
        // Success Message
        alert("Movie Details Saved in System");
        $("#save_movie").modal("hide");
        // Load Movie Details again
        loadAllMovieDetails();
        clearSaveForm();
    }).fail(function (xhr, status) {
        // Error Message
        alert("Movie Details are not Saved in System")
        $("#save_movie").modal("hide");
        clearSaveForm();
    });
}

// This function used to Update Movie Details using Web API
function updateMovie() {
    // Collect Input Details 
    let movie_id = parseInt($("#movie_id").val());
    let movie_name = $('#movie_name1').val();
    let rating1 = parseInt($('#rating1').val());
    let summary1 = $('#summary1').val();
    let directors = $("#directors1").val();

    // Save Details in Movie JSON Data
    let movie = {
        movieid: movie_id,
        moviename: movie_name,
        rating: rating1,
        summary: summary1,
        director: directors
    };

    // Request the Web API for Insertion
    $.ajax({
        type: "PUT",
        url: webAPIUrl + "/" + movie_id,
        data: JSON.stringify(movie),
        contentType: "application/json; charset=utf-8"
    }).done(function (response) {
        // Success Message
        alert("Movie Details Updated in System");
        // Load Movie Details again
        loadAllMovieDetails();
        $("#movie_update").modal("hide");
        clearUpdateForm();
    }).fail(function (xhr, status) {
        // Error Message
        alert("Movie Details are not Updated in System")
        $("#movie_update").modal("hide");
        clearUpdateForm();
    });
}


function clearUpdateForm() {
    $('#movie_id').val("");
    $('#movie_name1').val("");
    $('#summary1').text("");
    $('#rating1').val(1);
    $('#directors1').val("");
}

function clearSaveForm() {
    $('#movie_name').val("");
    $('#summary').text("");
    $('#rating').val(1);
    $('#directors').val("");
}

// Fetch Details of Movie based upon its ID using Web API
function getMovie(movieid) {
    $.ajax({
        type: "GET",
        url: webAPIUrl + "/" + movieid,
        contentType: "application/json"
    }).done(function (data) {
        // Update the Form data for edit tutorial details
        $('#movie_id').val(data.movieID);
        $('#movie_name1').val(data.movieName);
        $('#summary1').text(data.summary);
        $('#rating1').val(data.rating);
        $('#directors1').val(data.director);
    });
}

// Function to remove Movie Details based upon its ID with using Web API
function removeMovie(movieid) {
    // Assure User Choice
    let decision = confirm("You Will Not Undo... If Details are Deleted. Are You Sure?");

    if (decision) {
        // Request Web API to Delete Movie
        $.ajax({
            type: "DELETE",
            url: webAPIUrl + "/" + movieid,
        }).done(function (response) {
            // Refresh Movie Details
            loadAllMovieDetails();
        });
    }
}