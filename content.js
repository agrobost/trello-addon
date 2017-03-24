window.addEventListener("load", myMain, false);

function updateUI() {
    "use strict";
    //add link 'Copy emails to clipboard' to all divs. Links id are 0, 1, 2
    $('.js-list.list-wrapper').each(function (i) {
        "use strict";
        $(this).find('.icon-sm.icon-overflow-menu-horizontal').click(function () {
            setTimeout(function () {
                $('.pop-over-list').append('<li><a id=\'div' + i + '\'>Copy emails to clipboard</a></li>');

                //addclickListener
                let numberOfDiv = $('.js-list.list-wrapper').length;
                for (let i = 0; i < numberOfDiv; i++) {
                    $('#div' + i).click(function (i) {
                        console.log('hello from ' + i);
                    });
                }
            }, 50);
        });
    });
}

function extractEmails(text) {
    'use strict';
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

function getEmails(idDiv) {
    "use strict";
    $('.js-list.list-wrapper').each(function (i) {
        $(this).find('.list-card.js-member-droppable.ui-droppable').each(function (j) {
            //test card label
            if (!$(this).find('.card-label').hasClass('card-label-black')) {
                let email = $(this).find('.list-card-title.js-card-name').text().trim();
                email = extractEmails(email);
                console.log('bloc ' + i + ' ligne ' + j + ' ' + email);
            }
        });
    });
}

function myMain(evt) {
    updateUI();
}
