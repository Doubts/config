(function(e){e.rea={globals:window,extend:function(a){var d=function(a,c){for(var b in a)if(a.hasOwnProperty(b))if(Object.getOwnPropertyDescriptor(a,b).get)c.__defineGetter__(b,a.__lookupGetter__(b));else{var f=a[b],g=typeof f;"undefined"!=g&&(null===f?c[b]=f:"object"==g?(c[b]=c[b]||{},d(f,c[b])):"array"==g?(c[b]=c[b]||[],d(f,c[b])):c[b]=f)}};d(a,e.rea)}};e.rea.extend({page:{reload:function(){window.location.reload()}},content:{onReady:function(a){var d=function(){"prerender"!==document.webkitVisibilityState&&
(document.removeEventListener("webkitvisibilitychange",d,!1),a())};"prerender"!==document.webkitVisibilityState?a():document.addEventListener("webkitvisibilitychange",d,!1)}},runtime:function(){var a={};a.__defineGetter__("lastError",function(){return chrome.runtime.lastError});a.__defineGetter__("id",function(){return chrome.runtime.id});a.__defineGetter__("short_id",function(){return a.id.replace(/[^0-9a-zA-Z]/g,"").substr(0,4)});return a}(),extension:{getURL:function(a){return chrome.runtime.getURL(a)},
sendMessage:function(a,d){return chrome.runtime.sendMessage(a,d)},onMessage:{addListener:function(a){return chrome.runtime.onMessage.addListener(a)}},connect:function(a){return chrome.runtime.connect({name:a})}}});e.rea.extend(function(){var a=20,d="537.33",e=!1,c=!1;try{e=-1!=navigator.userAgent.search("OPR/"),c=-1!=navigator.userAgent.search("Mac OS X")}catch(f){}try{d=parseInt(navigator.userAgent.match(/AppleWebKit\/([0-9]+\.[0-9]+)/)[1])}catch(f){}try{a=parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2])}catch(f){}var b=
{CONSTANTS:{STORAGE:{SCHEMA:"#schema",TYPE:"#storage",CONFIG:"#config",VERSION:"#version",LEGACY_VERSION:"TM_version",LAST_START:"#laststart",UPDATE:"#update",BEGGING:"#begging"},PREFIX:{SCRIPT_UID:"@uid#",COND:"@re#",STORE:"@st#",SCRIPT:"@source#",EXTERNAL:"@ext#",META:"@meta#"}},RUNTIME:{BROWSER:e?"opera":"chrome",CHROME:!e,OPERA:e,BROWSER_VERSION:a,WEBKIT_VERSION:d,FAST_EXEC_SUPPORT:50<=a,DETECT_CONSTRUCTORS_BY_KEYS:!1,ALLOWS_FILE_SCHEME_ACCESS:null,MAX_SCRIPTS:1E3,WEBREQUEST_XHR_SUPPORT:!0,CAN_SAVEAS_ZIP:!0,
CONTEXT_MENU:!0,INCOGNITO_MODE:!0},ACTIONMENU:{COLUMNS:3,CLOSE_ALLOWED:!0,MIN_DELAY:c?150:0},OPTIONPAGE:{CLOSE_ALLOWED:!1},DB:{USE:null,DEFAULT:"chromeStorage"},XMLHTTPREQUEST:{RETRIES:0,PARTIAL_SIZE:16777216,COOKIE_PASSTHROUGH:!1},SCRIPT_DOWNLOAD:{TIMEOUT:15},PINGPONG:{RETRIES:10},MISC:{TIMEOUT:1,IDLE_TIMEOUT:30,DISTURBANCE_ALLOWED:60},HTML5:{LOCALSTORAGE:null},REQUESTS:{HAS_SENDER_ID:!0,INTERNAL_PAGE_PROTOCOL:"chrome-extension:",SENDS_ORIGIN:!0,GET_INTERNAL_PATH_REGEXP:function(a,c){var d=/(\/|\.|\+|\?|\||\(|\)|\[|\]|\{|\}|\\)/g;
return new RegExp((b.REQUESTS.INTERNAL_PAGE_PROTOCOL+"//"+rea.runtime.id+"/").replace(d,"\\$1")+"([a-zA-Z"+(a?"\\/":"")+"]*)"+(c||"").replace(d,"\\$1"))},GET_INTERNAL_PAGE_REGEXP:function(){return b.REQUESTS.GET_INTERNAL_PATH_REGEXP(!1,".html")}},OPTIONS:{HAS_CSP:!0,NATIVE_SCRIPT_IMPORT:!0,CAN_DOWNLOAD:!0}};return{FEATURES:b}}())})(window);