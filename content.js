window.addEventListener("load", myMain, false);

function updateUI() {
    "use strict";
    //add link 'Copy emails to clipboard' to all divs. Links id are div0, div1, div2
    $('.js-list.list-wrapper').each(function (i) {
        "use strict";
        $(this).find('.icon-sm.icon-overflow-menu-horizontal').click(function () {
            setTimeout(function () {
                $('.pop-over-list').append('<li><a id=\'div' + i + '\'>Copy emails to clipboard</a></li>');

                //addclickListener
                let numberOfDiv = $('.js-list.list-wrapper').length;
                for (let i = 0; i < numberOfDiv; i++) {
                    $('#div' + i).click(function () {
                        let str = getEmails(i);
                        console.log(str);
                        window.prompt("Copy to clipboard: Ctrl+C, Enter", str);
                    });
                }
            }, 100);
        });
    });
}

function extractEmails(text) {
    'use strict';
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

function getEmails(idDiv) {
    let str = '';
    "use strict";
    $('.js-list.list-wrapper').each(function (i) {
        $(this).find('.list-card.js-member-droppable.ui-droppable').each(function (j) {
            //test card label
            if (!$(this).find('.card-label').hasClass('card-label-black') && i === idDiv) {
                let email = $(this).find('.list-card-title.js-card-name').text().trim();
                email = extractEmails(email);
                if (email) {
                    if (!str) {
                        str += email;
                    } else {
                        str += ', ' + email + ' ';
                    }

                }
            }
        });
    });
    return str.trim();
}

function myMain(evt) {
    updateUI();
}
