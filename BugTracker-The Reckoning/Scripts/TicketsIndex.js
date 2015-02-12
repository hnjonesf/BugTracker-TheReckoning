$('.advancedSearch').hide();
function AdvancedSearch() {
    if ($('.advancedSearch').is(':hidden')) {
        $('.advancedSearch').slideDown(200);
    } else {
        $('.advancedSearch').slideUp(150);
    }
}