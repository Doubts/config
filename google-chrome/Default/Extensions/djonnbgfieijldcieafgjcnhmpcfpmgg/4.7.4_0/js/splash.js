(function(){

  /* ===== Globals ===== */

  window.VERSION = "4.0.0";

  if (CONFIG.os == "windows"){
    window.STORE_TYPE = "windows";
  } else if (CONFIG.os === "osx") {
    window.STORE_TYPE = "osx";
  } else if (CONFIG.os === "web") {
    window.STORE_TYPE = "web";
  } else if (CONFIG.os === "android") {
    window.STORE_TYPE = "play";
  } else if (CONFIG.os === "chrome") {
    window.STORE_TYPE = "chrome";
  } else {
    window.STORE_TYPE = "ios";
  }

  window.FILTER_PACK_KEYS = [
    "co.polarr.ppe.free.filters.pack1",
    "co.polarr.ppe.free.filters.pack2",
    "co.polarr.ppe.purchase.filters.pack1",
    "co.polarr.ppe.purchase.filters.pack2",
    "co.polarr.ppe.purchase.filters.pack3",
    "co.polarr.ppe.purchase.filters.pack4",
    "co.polarr.ppe.purchase.filters.pack5",
    "co.polarr.ppe.purchase.filters.pack6",
    "co.polarr.ppe.purchase.filters.pack7",
    "co.polarr.ppe.purchase.filters.pack8",
    "co.polarr.ppe.purchase.filters.pack9",
    "co.polarr.ppe.purchase.filters.pack10",
    "co.polarr.ppe.purchase.filters.pack11",
    "co.polarr.ppe.purchase.filters.pack12"
  ];

  window.PURCHASE_KEYS = [
    (CONFIG.os === "android") ? "photo.editor.polarr.purchase.pro" : "co.polarr.ppe.purchase.pro",
    "co.polarr.ppe.purchase.pro_all_filters",
    "co.polarr.ppe.purchase.filters.all",
    "co.polarr.ppe.subscribe.premium", // current displayed pricing $0.99
    "co.polarr.ppe.subscribe.premium.no_discount", // alternative pricing $1.99
    "co.polarr.ppe.subscribe.premium.yearly", // yearly

    "co.polarr.ppe.purchase.local_adjustments",
    "co.polarr.ppe.purchase.text_tool",
    "co.polarr.ppe.purchase.denoise",
    "co.polarr.ppe.purchase.custom_filter_sync"
  ].concat(FILTER_PACK_KEYS);

  window.PURCHASE_KEYS_MAP = {
    everything: PURCHASE_KEYS[1],
    all_filters: PURCHASE_KEYS[2],
    pro_features: PURCHASE_KEYS[0],
    local_adjustments: PURCHASE_KEYS[6],
    text_tool: PURCHASE_KEYS[7],
    denoise: PURCHASE_KEYS[8],
    backup_filters: PURCHASE_KEYS[9]
  };

  window.splashScreen = {
    hide: function() {
      var splash = document.getElementById("splash");
      if (!splash) return;
      setTimeout(function(){
        splash.style.opacity = 0;
        setTimeout(function(){
          if (splash.parentNode) splash.parentNode.removeChild(splash)
        }, 300)
      }, CONFIG.demoMode ? 2000 : 1)
    },
    setHTML: function(html) {
      var splash = document.getElementById("splash");
      if (!splash) return;
      splash.innerHTML = html;
    }
  };

  window.URLParams = {};
  var params = location.search ? location.search.split('?')[1].split('&') : [];
  params.forEach(function (param) {
    var pair = decodeURIComponent(param).split('=');
    URLParams[pair[0]] = pair[1];
  })

  if (URLParams.debug) {
    CONFIG.debug = true
  }

  /* ===== Set default mode for mobile ===== */

  if (CONFIG.platform === "mobile") {
    window.document.body.className = "disabled portrait-mode"
  }

  /* ===== Disable contextmenu for IE and Chrome on Windows ===== */

  if (!CONFIG.debug) {
    window.document.body.addEventListener("contextmenu", function(e){
      e.preventDefault();
    });
  }

  /* ===== Logging ===== */

  var now = (function () {
    var _performance = window.performance || Date
    return function () {
      return _performance.now.apply(_performance)
    }
  }())

  var logTimes = {}

  window.logTime = function (name) {
    if (CONFIG.debug) logTimes[name] = now()
  }

  window.logTimeEnd = function (name) {
    if (CONFIG.debug) {
      var args = Array.prototype.slice.call(arguments);
      var time = (now() - logTimes[name]).toFixed(3);
      args[0] = name + ": " + time + "ms";
      console.log.apply(console, args);
    }
  }

  window.log = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof POIPCManager !== "undefined") alert(JSON.stringify(args));
    console.log.apply(console, args);
  };

  window.addEventListener('error', function(e) {
    var filename = e.filename.lastIndexOf('/');
    var datetime = new Date().toString();
    var errorData = {
      type: e.type,
      path: e.filename,
      filename: e.filename.substring(++filename),
      line: e.lineno,
      column: e.colno,
      error: e.message,
      stackTrace: ((e.error) ? e.error.stack.toString().replace(/(\r\n|\n|\r)/gm,"") : ""),
      datetime: datetime
    };

    if (CONFIG.platform === "windows" && typeof $ !== 'undefined') {
      e.preventDefault();

      $.ajax({
        type: "POST",
        dataType: "json",
        url: "https://www.polarr.co/users/email_errors",
        data: {
          type: "Desktop | " + navigator.userAgent,
          error: errorData.error + "@line " + errorData.lineno + " in file:" + errorData.path,
          stack: errorData.stackTrace
        }
      });
    }

    log(e, errorData);
  });


  /* ===== Utility Functions ===== */

  var loadScript = function(src, load, error) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = load;
    script.onerror = error;
    document.head.appendChild(script);
  };

  var loadCSS = function(src) {
    var css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.href = src;
    document.head.appendChild(css);
  };

  var _s4 = function(){
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  var guid = function() {
    return _s4() + _s4() + '-' + _s4() + '-' + _s4() + '-' +
      _s4() + '-' + _s4() + _s4() + _s4();
  };



  /* ===== Scrips ===== */

  var loadScripts = function() {
    var scripts = CONFIG.scripts || [];
    scripts.forEach(loadScript);
  };

  var delay = (CONFIG.embedded && CONFIG.debug) ? 2000 : 0;

  setTimeout(loadScripts, delay);

  /* ===== Analytics ===== */

  // chrome app doesn't like localstorage nor do we use the analytics.js through web
  if(window.STORE_TYPE != "chrome"){

    var uuid = guid();
    try {
      if(localStorage.getItem("ppe_user_id") == null){
        localStorage.setItem("ppe_user_id",uuid);
      }else{
        uuid = localStorage.getItem("ppe_user_id");
      }
    }catch(e){
      console.error("Caught error: can't get localStorage ppe_user_id");
    }

    var gaSrc = 'https://www.google-analytics.com/analytics.js';
    if(STORE_TYPE == "windows"){
      gaSrc = '/analytics.js';
    }
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script',gaSrc,'ga');

    // We are using UA-53563114-2 for Google Chrome in google-analytics-bundle-polarr-mod.js
    if(STORE_TYPE == "amazon" || STORE_TYPE == "underground"){
      ga('create', 'UA-53563114-9', 'auto');
    } else if (STORE_TYPE == "baidu" || STORE_TYPE == "play"){
      ga('create', 'UA-53563114-8', 'auto');
    } else if (STORE_TYPE == "windows"){
      ga('create', 'UA-53563114-11', 'auto');
    } else if (STORE_TYPE == "osx"){
      ga('create', 'UA-53563114-12', 'auto');
    } else if (STORE_TYPE == "web"){
      ga('create', 'UA-53563114-15', 'auto');
    } else {
      // presumbly ios
      ga('create', 'UA-53563114-3', 'auto');
    }
    ga('set', 'checkProtocolTask', null);
    ga('send', 'pageview');
    ga('set', '&uid', uuid); // Set the user ID using signed-in user_id.
    
  }
})();
