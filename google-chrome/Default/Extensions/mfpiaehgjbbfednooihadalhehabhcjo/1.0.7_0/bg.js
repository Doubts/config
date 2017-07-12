/**
 * User: xiaoge
 * At: 14-5-19 5:52下午
 * Email: abraham1@163.com
 */

chrome.app.runtime.onLaunched.addListener(function(launchData) {
    chrome.app.window.create('index.html', {
        id: "AwesomeScreenshotApp",

        innerBounds: {
            width: 1250,
            height: 700,
            minWidth: 1070,
            minHeight: 650
        },

        frame: {
            type: 'chrome',
            color: '#ffffff'
        }
    }
//        , function(win) {
//        win.onClosed.addListener(function() {
//            win.contentWindow.saveBeforeClose(); //没有作用
//        });
//    }
    );
});

chrome.runtime.onInstalled.addListener(function() {
//    console.log('installed');
});

chrome.runtime.onSuspend.addListener(function() {
    // Do some simple clean-up tasks.
});
chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
    switch (request.name) {
        case 'handshake':
            sendResponse('installed');
            break;
        case 'launch':
            var t_title = request.title ? request.title : 'Form extension',
                t_dataUrl = request.dataUrl;

            chrome.app.window.create('index.html', {
                id: "AwesomeScreenshotApp",

                innerBounds: {
                    width: 1250,
                    height: 700,
                    minWidth: 1070,
                    minHeight: 650
                },
                frame: {
                    type: 'chrome',
                    color: '#ffffff'
                }
            }, function(createdWindow){
                createdWindow.contentWindow.t_title = t_title;
                createdWindow.contentWindow.t_dataUrl = t_dataUrl;
            });

            chrome.runtime.sendMessage({dataUrl:t_dataUrl, title: t_title});
            break;
    }

});
