// makes an ajax call to assign a ticket to a user
$(document).ready(function () {
    $('body').on('click', '.btn-assign-user', function (event) {
        var id = this.id;
        var options = {
            url: '/Home/AssignDev',
            type: 'GET',
            data: { ticketId: id }
        }
        $.ajax(options).then(function (response) {
            $('#rightPanel'+id).html(response);
        });
    });
})