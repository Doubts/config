var webview = document.getElementById('temp-webview');
var loadingView = document.getElementById('loading');

window.addEventListener('message', function (e) {
    console.log(e);
    chrome.runtime.sendMessage({name: 'finish', data: e.data});
    window.close();
});

webview.addEventListener('loadstart', function() {
    console.log('loadstart');
    loadingView.style.display = 'block';
}, true);

webview.addEventListener('loadstop', function () {
    console.log('loadstop');
    loadingView.style.display = 'none';

    webview.contentWindow.postMessage({
        command: 'handShake'
    }, '*');
}, true);

setTimeout(function () {
    //webview.src = 'https://google.com';
    webview.src = "https://www.diigo.com/account/thirdparty/openid?openid_url=https://www.google.com/accounts/o8/id&request_from=chrome_desktop_awesome_screenshot";
}, 100);




