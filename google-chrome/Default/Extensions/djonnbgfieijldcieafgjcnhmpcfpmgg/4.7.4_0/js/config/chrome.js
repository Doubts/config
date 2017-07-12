(function(root) {
  var CONFIG = {
    //demoMode: true,
    platform: "chrome",
    os: "chrome",
    // debug: true,
    enableSave: false,
    enableSaveCopy: true,
    enableShare: false,
    enableGallery: false,
    enableGalleryTransitions: false,
    enablePurchases: false,
    enableBackgroundBlur: false,
    enableStartScreen: true,
    enableBatchExport: true,
    importLimit: 50,
    scripts: [
      'js/build/editor.js',
      'js/build/dcraw.js'
    ]
  };

  if (typeof exports === 'object') {
    module.exports = CONFIG;
  } else {
    root.CONFIG = CONFIG;
  }
}(this));