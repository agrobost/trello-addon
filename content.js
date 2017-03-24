window.addEventListener ("load", myMain, false);

function myMain (evt) {
    function extractEmails (text)
    {
        return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    }
    $('.js-list.list-wrapper').each(function (i) {
        let email = $(this).find('.list-card-title.js-card-name').text().trim();
        email = extractEmails(email);
        console.log(email);
    });
}
