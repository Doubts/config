function receiveMessage(a){var b=a.data;switch(b.type){case"getMic":console.log("getMic"),getMic(function(a){window.parent.postMessage({type:"audioStream",steam:a},"*")},function(){})}}function getMic(a,b){window.navigator.webkitGetUserMedia({audio:!0,video:!0},function(b){a(b)},function(a){b(a)})}function init(){getMic(function(a){console.log(a),a&&window.close()})}window.addEventListener("message",receiveMessage,!1),init();