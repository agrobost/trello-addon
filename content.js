chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        console.log('yep');
        // do your things
        $('.list-card-title.js-card-name').text('RUNNING');
    }
})