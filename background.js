chrome.browserAction.onClicked.addListener(function (tab) {
    /* Send a message to the active tab's content script */
    console.log('asdasd');
    chrome.tabs.sendMessage(tab.id, { action: 'saySomething' });
});
