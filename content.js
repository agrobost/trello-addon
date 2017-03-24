window.addEventListener("load", myMain, false);

function myMain(evt) {

    $('.icon-sm.icon-overflow-menu-horizontal').click(function(){
        setTimeout(function () {
            $('.pop-over-list').append('<li><a>Copy emails to clipboard</a></li>');
        },50);
    });


    function extractEmails(text) {
        return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    }

    $('.js-list.list-wrapper').each(function (i) {
        $(this).find('.list-card.js-member-droppable.ui-droppable').each(function (j) {
            //if (!$(this).find('.card-label').hasClass('card-label-black')) {
                let email = $(this).find('.list-card-title.js-card-name').text().trim();
                email = extractEmails(email);
                console.log('bloc ' + i + ' ligne ' + j + ' ' + email);
            //}
        });
    });
}
