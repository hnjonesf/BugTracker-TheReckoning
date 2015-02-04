function editTicket(theId) {
    var boxContent = $('#description'+theId).text().trim();
    $('#description' + theId).replaceWith('<div id="description' + theId + '"><textarea class="form-control"  style="height: 200px;"> ' + boxContent + '</textarea>' +
        '<span title="Edit Ticket"><em>'+
        '<em><button id="desBtn'+theId+'" class="btn btn-default glyphicon glyphicon-floppy-disk" onclick="saveBody('+theId+')"></button></em></span>'+
'</div>')
}
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
            $('#description'+bodyId).replaceWith('<p id="description'+bodyId+'">'+response.Description+'</p>');
        });
}