function saveBody(bodyId) {
    //do JSON call to post
    var content = $('#description' + bodyId + ' textarea').val();
    var options = {
        url: '/Home/SaveTicket',
        type: 'POST',
        data: { ticketId: bodyId, bodyText: content },
    }
    $.ajax(options).then(function (response) {
        $('#desBtn' + bodyId).attr("class", "btn btn-default glyphicon glyphicon-floppy-saved");
        $('#description' + bodyId).replaceWith('<p id="description' + bodyId + '">' + response.Description + '</p>');
    });
}

$(".example").piechart([
["Country", "M inhabitants"],
["China", 1360, 'blue'],
["India", 1234],
["USA", 316],
["Indonesia", 237],
["Brazil", 201]
]);