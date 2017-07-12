function nextTick(e) {
    setTimeout(e, 0)
}

function make4Len16(e) {
    var t = e.toString(16);
    while (t.length < 4) t = "0" + t;
    return t
}

function unsafeCallback(e) {
    return e
}

function ab2str(e) {
    return e.constructor.name == "ArrayBuffer" && (e = new Uint8Array(e)), String.fromCharCode.apply(null, e)
}

function str2ab(e, t, n) {
    var r = e.length;
    n && r++, t || (t = new ArrayBuffer(r));
    var i = new Uint8Array(t);
    n && (i[e.length] = 0);
    for (var s = 0, o = e.length; s < o; s++) i[s] = e.charCodeAt(s);
    return t
}

function writeLine(e, t, n) {
    e.write(str2ab(t + "\n"), n)
}

function readLine(e, t) {
    function r() {
        e.read(function(i) {
            for (var s = 0; s < i.byteLength; s++)
                if (i[s] == slashN) {
                    var o = i.subarray(0, s);
                    n.push(o);
                    var u = "";
                    for (var a in n) a = n[a], u += ab2str(a);
                    var f = i.subarray(s + 1);
                    e.unshift(f), t(u);
                    return
                }
            n.push(i), r()
        })
    }
    var n = [];
    r()
}

function readString(e, t) {
    function r(t) {
        n += ab2str(t), e.read(r)
    }
    var n = "";
    e.onClose = function() {
        t(n)
    }, e.read(r)
}

function appendBuffer(e, t) {
    var n = new Uint8Array(e.byteLength + t.byteLength);
    return n.set(e, 0), n.set(t, e.byteLength), n
}

function timeTrace(e) {
    var t = (new Date).getTime();
    console.log(e + ": " + (t - timeThing)), timeThing = t
}

function bufferToHex(e) {
    var t = new Uint8Array(e),
        n = "";
    for (var r in t) r = t[r], r < 16 ? n += "0" + r.toString(16) : n += r.toString(16);
    return n
}

function hexToBuffer(e) {
    var t = new ArrayBuffer(e.length / 2),
        n = new Uint8Array(t);
    for (var r = 0; r < e.length / 2; r++) {
        var i = e.substr(r * 2, 2);
        n[r] = parseInt(i, 16)
    }
    return t
}

function base64ToArrayBuffer(e) {
    var t = window.atob(e),
        n = t.length,
        r = new Uint8Array(n);
    for (var i = 0; i < n; i++) {
        var s = t.charCodeAt(i);
        r[i] = s
    }
    return r.buffer
}

function arrayBufferToBase64(e) {
    var t = "",
        n = new Uint8Array(e),
        r = n.byteLength;
    for (var i = 0; i < r; i++) t += String.fromCharCode(n[i]);
    return window.btoa(t)
}

function hex2b64(e) {
    var t, n, r = "";
    for (t = 0; t + 3 <= e.length; t += 3) n = parseInt(e.substring(t, t + 3), 16), r += b64map.charAt(n >> 6) + b64map.charAt(n & 63);
    t + 1 == e.length ? (n = parseInt(e.substring(t, t + 1), 16), r += b64map.charAt(n << 2)) : t + 2 == e.length && (n = parseInt(e.substring(t, t + 2), 16), r += b64map.charAt(n >> 2) + b64map.charAt((n & 3) << 4));
    while ((r.length & 3) > 0) r += b64pad;
    return r
}

function getQueryVariable(e) {
    var t = window.location.search.substring(1),
        n = t.split("&");
    for (var r = 0; r < n.length; r++) {
        var i = n[r].split("=");
        if (decodeURIComponent(i[0]) == e) return decodeURIComponent(i[1])
    }
    console.log("Query variable %s not found", e)
}

function throttleTimeout(e, t, n, r) {
    return e ? clearTimeout(e.timeout) : e = {
        items: []
    }, e.timeout = setTimeout(function() {
        r(e.items), e.items = []
    }, n), e.items.push(t), e
}

function copyTextToClipboard(e) {
    var t = document.createElement("textarea");
    t.style.position = "fixed", t.style.top = 0, t.style.left = 0, t.style.width = "2em", t.style.height = "2em", t.style.padding = 0, t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
    try {
        var n = document.execCommand("copy")
    } catch (r) {
        console.log("Oops, unable to copy")
    }
    document.body.removeChild(t)
}

function Socket(e, t) {
    e.socketId ? (this.socketId = e.socketId, readers[this.socketId] = this) : chrome.sockets.tcp.create(function(n) {
        this.socketId = n.socketId, chrome.sockets.tcp.connect(this.socketId, e.host, e.port, function(e) {
            chrome.runtime.lastError, e ? (this.destroy(), t(null)) : (readers[n.socketId] = this, t(this))
        }.bind(this))
    }.bind(this)), this.pending = null
}

function Server() {}

function AdbUsbTransport(e, t) {
    this.handle = e, this.iface = t;
    for (var n in t.endpoints) n = t.endpoints[n], n.type == "bulk" && (this.zero_mask = n.maximumPacketSize - 1, n.direction == "in" ? this.in = n : this.out = n)
}

function AdbTcpTransport(e) {
    this.socket = e, this.zero_mask = (1 << 30) - 1
}

function AdbDevice(e, t) {
    this.onConnected = t, this.transport = e, this.currentSocketId = 0, this.sockets = {}, this.forwards = {}, this.maxPayload == AdbDevice.MAX_PAYLOAD
}

function parseConnectionPayload(e) {
    var t = {};
    e = ab2str(e);
    var n = e.replace("device::", "").split(";");
    for (var r in n) {
        r = n[r];
        var i = r.split("=");
        i.length == 2 && (t[i[0]] = i[1])
    }
    return t
}

function AdbSocket(e, t, n) {
    n || (n = function() {}), this.device = e, this.localId = t, this.onConnected = n
}

function connectUsbAdb(e, t, n) {
    console.log("connecting:", e, t);
    var r = new AdbDevice(new AdbUsbTransport(e, t), n);
    r.sendMessage(AdbDevice.kCommandCNXN, AdbDevice.ADB_PROTOCOL_VERSION, AdbDevice.MAX_PAYLOAD, "host::"), r.receiveMessages()
}

function AdbServer(e) {
    var e = e || {},
        t = e.port || 5037,
        n = e.start !== !1;
    this.currentSocketId = 0, this.pendingDevices = {}, this.port = t, this.adbDevices = {}, this.clients = {}, n && this.start()
}

function _nowMs() {
    return (new Date).getTime()
}

function AdbClient(e, t) {
    this.server = e, this.socket = t
}

function AdbSync() {}

function openList(e) {
    if (list) {
        e && e(list);
        return
    }
    chrome.app.window.create("list.html", {
        bounds: {
            width: 480,
            height: 640
        }
    }, function(t) {
        adbServer.start(), list = t, list.contentWindow.appcallback = function() {
		navigator.platform.toLowerCase().indexOf("win") == -1 && $(list.contentWindow.document).find("#windows").hide(), 
		$(list.contentWindow.document).find("#toggle-server").click(function() {
                	hadAdbServer ? (hadAdbServer = !1, $(list.contentWindow.document).find("#toggle-server").text("Start ADB Server"), adbServer.kill(), Adb.killServer())
					:(hadAdbServer = !0, $(list.contentWindow.document).find("#toggle-server").text("Restart ADB Server"), adbServer.start())
            	}), 
		$(list.contentWindow.document).find("#refresh-devices").click(function() {
	                adbServer.refresh()
                })
        }, list.onClosed.addListener(function() {
            list = null, !openShellWindows && !list && adbServer.kill()
        }), e && (controller = new Controller(receiverWindow.contentWindow, !0), e(receiverWindow))
    })
}

function refreshList() {
    if (!list) return;
    $(list.contentWindow.document).find("#devices").empty();
    var msgs = $(list.contentWindow.document).find("#messages")
    var e = Object.keys(adbDevices);
    if (!e.length) {
        var t = $('<a href="#" class="btn btn-lg btn-default">No devices found</a>');
        $(list.contentWindow.document).find("#devices").append(t)
    } else $(e).each(function(e, t) {

        function f() {
            //delete scrIcon[t], o.attr("src", "usb-icon.png")
            //delete capIcon[t], b.attr("src", "wld-key.png")
        }
        var n = adbDevices[t],
            r = $('<p class="lead"><small>Device found:</small> ' + n.name + "</p>"),
            
            btn_grant = $('<h4><button type="button" id="btnGrant" class="btn btn-primary">Grant Battery stats</button></h4>');
            btn_revoke = $('<h4><button type="button" id="btnRevoke" class="btn btn-primary">Revoke Battery stats</button></h4>');
        	
        isChecked ='';
        if (wldFullVersion == 1) isChecked = 'checked';
        chkFull = $('<br><input type="checkbox" value="" ' + isChecked+ '>');
        chkFull.click(function(){
            if (wldFullVersion==0) wldFullVersion=1;
            else wldFullVersion=0;
        });
        depr = $('<button type="button" id="btnUsbToTCP" class="btn btn-primary">USB -> TCPIP mode</button> ');
        r.append(chkFull),
        r.append(' Apply to Full version(pro)</label>'),
        r.append(btn_grant), 
        r.append(btn_revoke),
        r.append(' <h5>Soon to be deprecated:</h5>')
        r.append(depr);

        $(list.contentWindow.document).find("#devices").append(r), 
        depr.click(function() {
            if (tcpMode==1) {
               var e = Object.keys(adbDevices);
               t = e[0];
			    Adb.adbUsb({ serialno: t,
                                    command: "5555"
                                }, function(e){
                                    msg = String(e)
                                    setMessage(msgs, msg);
                                    tcpMode=0;
                          });
                
            } else {

            var e = Object.keys(adbDevices);
			t = e[0];
	                Adb.adbTcpIp({
                                    serialno: t,
                                    command: "5555"
                                }, function(e){
                                	msg = String(e)
                                    
                                    if (msg.indexOf("restarting in TCP mode")>-1)
                                    	{setMessage(msgs,"Changed Adb to TCP mode");tcpMode=1;}
                                    else setMessage(msgs, msg);
                                });
             }
 
        }),
        btn_revoke.click(function(element) {
                
                var e = Object.keys(adbDevices);
                t = e[0];
                packageName = "noroot";
                if (wldFullVersion==1) packageName = "full";
                Adb.shell({ serialno: t,
                            command: "pm revoke com.uzumapps.wakelockdetector." + packageName + " android.permission.BATTERY_STATS"
                        }, function(e) 
                        {
                            msg = String(e);
                            
                            if (msg.indexOf("xception")<0) {
                                //success
                                setMessage(msgs, "Succesfully revoked!")
                            } else {
                                setMessage(msgs, msg);
                            }
                        });
             
        });
        btn_grant.click(function(element) {

        	    var e = Object.keys(adbDevices);
                t = e[0];
                packageName = "noroot";
                if (wldFullVersion==1) packageName = "full";
                Adb.shell({ serialno: t,
                            command: "pm grant com.uzumapps.wakelockdetector." + packageName + " android.permission.BATTERY_STATS"
                        }, function(e) 
                        {
                        	msg = String(e);
                         	
                         	if (msg.indexOf("xception")<0) {
                        		//success
                                setMessage(msgs, "Succesfully granted!")
                            } else {
                                setMessage(msgs, msg);
                            }
                        });
        	 
        });
    });
}
function setMessage(v, msg){
	v.show();
	console.log(msg);
	v.text(msg);
	setTimeout(function(){v.hide();}, 4000);
}
function initRefresher() {
    Adb.devices(function(e) {
        e ? (hadAdbServer = !0, adbDevices = e) : (hadAdbServer = !1, adbDevices = {})
    })
}

function refreshDevices() {
    list && (hadAdbServer ? $(list.contentWindow.document).find("#toggle-server").text("Kill Server") : $(list.contentWindow.document).find("#toggle-server").text("Start Server")), initRefresher(), refreshList(), setTimeout(refreshDevices, 4000)
}
var pendingFuncs;
window.addEventListener("message", function() {
    pendingFuncs && ($.each(pendingFuncs, function(e, t) {
        t()
    }), pendingFuncs = null)
}, !1);
var slashN = "\n".charCodeAt(0),
    timeThing = (new Date).getTime(),
    b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    b64pad = "=";
String.prototype.startsWith || Object.defineProperty(String.prototype, "startsWith", {
    enumerable: !1,
    configurable: !1,
    writable: !1,
    value: function(e, t) {
        return t = t || 0, this.lastIndexOf(e, t) === t
    }
}), Object.fromArray = function(e) {
    var t = {};
    for (var n in e) {
        var r = e[n];
        t[r] = r
    }
    return t
}, $.ajaxTransport("+binary", function(e, t, n) {
    if (window.FormData && (e.dataType && e.dataType == "binary" || e.data && (window.ArrayBuffer && e.data instanceof ArrayBuffer || window.Blob && e.data instanceof Blob))) return {
        send: function(t, n) {
            var r = new XMLHttpRequest,
                i = e.url,
                s = e.type,
                o = e.async || !0,
                u = e.responseType || "blob",
                a = e.data || null,
                f = e.username || null,
                l = e.password || null;
            r.addEventListener("load", function() {
                var t = {};
                t[e.dataType] = r.response, n(r.status, r.statusText, t, r.getAllResponseHeaders())
            }), r.open(s, i, o, f, l);
            for (var c in t) r.setRequestHeader(c, t[c]);
            r.responseType = u, r.send(a)
        },
        abort: function() {
            n.abort()
        }
    }
});
var readers = {};
chrome.sockets.tcp.onReceive.addListener(function(e) {
    var t = readers[e.socketId];
    if (t == null) return;
    t.dataReceived(new Uint8Array(e.data))
}), chrome.sockets.tcp.onReceiveError.addListener(function(e) {
    var t = readers[e.socketId];
    if (t == null) return;
    t.destroy(), t.dataReceived(null)
}), Socket.connect = function(e, t) {
    return new Socket(e, t)
}, Socket.pump = function(e, t, n) {
    var r = function() {
            e.read(i)
        }.bind(e),
        i = function(e) {
            var n = e.buffer;
            if (e.byteOffset || e.length != n.byteLength) n = n.slice(e.byteOffset, e.byteOffset + e.length);
            t.write(n, r)
        }.bind(t);
    e.read(i), e.onClose = n
}, Socket.stream = function(e, t, n) {
    Socket.pump(e, t, function() {
        t.destroy();
        if (n) {
            var e = n;
            n = null, e()
        }
    }), Socket.pump(t, e, function() {
        e.destroy();
        if (n) {
            var t = n;
            n = null, t()
        }
    })
}, Socket.eat = function(e) {
    function t() {
        e.read(t)
    }
    t()
}, Socket.prototype.init = function() {
    chrome.sockets.tcp.onReceive.addListener(function(e) {
        if (acceptInfo.socketId != createInfo.socketId) return
    })
}, Socket.prototype.read = function() {
    this.closed && this.onClose && !this.pending && (this.onClose(), this.onClose = null);
    var e = 0;
    arguments[e].constructor.name == "Number" ? this.pendingLength = arguments[e++] : this.pendingLength = 0;
    var t = arguments[e],
        n = 0,
        r;
    while (this.pending && this.pending.length && !this.paused) {
        var i = this.pending.shift();
        this.pending.length || (this.pending = null);
        if (!this.pendingLength) {
            r = i;
            break
        }
        var s = i,
            o = Math.min(s.byteLength, this.pendingLength - n);
        if (o != s.byteLength) {
            var u = s.subarray(0, o),
                a = s.subarray(o);
            this.unshift(a), s = u
        }
        n += s.byteLength, r ? r = appendBuffer(r, s) : r = s;
        if (n == this.pendingLength) break
    }
    r != null && this.pendingLength != 0 && r.byteLength != this.pendingLength && (this.unshift(r), r = null);
    if (!r) {
        if (this.pendingCallback) throw new Error("double callback");
        this.pendingCallback = t;
        return
    }
    this.pendingCallback = null, t(r)
}, Socket.prototype.write = function(e, t) {
    chrome.sockets.tcp.send(this.socketId, e, function(n) {
        chrome.runtime.lastError;
        if (!n || n.resultCode) return;
        n.bytesSent < e.byteLength ? this.write(e.slice(n.bytesSent), t) : t()
    }.bind(this))
}, Socket.prototype.destroy = function(e, t) {
    chrome.sockets.tcp.close(this.socketId, function() {
        chrome.runtime.lastError
    })
}, Socket.prototype.unshift = function(e) {
    if (e.byteLength == 0) return;
    this.pending ? this.pending.unshift(e) : this.pending = [e]
}, Socket.prototype.dataReceived = function(e) {
    if (e && e.length) {
        var t = new Uint8Array(e);
        this.pending ? this.pending.push(t) : this.pending = [t]
    }
    e == null && (this.closed = !0);
    if (this.paused || !this.pending || !this.pending.length) {
        var n = this.onClose;
        this.closed && n && (delete this.onClose, n());
        return
    }
    var r = this.pendingLength,
        n = this.pendingCallback;
    n && (this.pendingCallback = null, this.read(r, n))
}, Socket.prototype.buffered = function() {
    var e = 0;
    if (this.pending)
        for (var t in this.pending) t = this.pending[t], e += t.byteLength;
    return e
}, Socket.prototype.pause = function() {
    if (this.paused) return;
    this.paused = !0, this.onPause()
}, Socket.prototype.resume = function() {
    if (!this.paused) return;
    this.paused = !1, this.onResume()
}, Socket.prototype.onResume = function() {
    chrome.sockets.tcp.setPaused(this.socketId, !1, function() {})
}, Socket.prototype.onPause = function() {
    chrome.sockets.tcp.setPaused(this.socketId, !0, function() {})
}, Server.prototype.__proto__ = Socket.prototype, Server.prototype.destroy = function() {
    chrome.sockets.tcpServer.close(this.socketId)
};
var listeners = {};
chrome.sockets.tcpServer.onAccept.addListener(function(e) {
    chrome.sockets.tcp.setPaused(e.clientSocketId, !1);
    var t = listeners[e.socketId];
    if (t == null) return;
    t(new Socket({
        socketId: e.clientSocketId
    }))
}), Server.prototype.listen = function(e, t, n) {
    var r, i;
    e.constructor.name == "Number" ? (r = e, i = "0.0.0.0") : (i = e.address, r = e.port), chrome.sockets.tcpServer.create(function(e) {
        this.socketId = e.socketId, listeners[this.socketId] = t, chrome.sockets.tcpServer.listen(e.socketId, i, r, function(e) {
            chrome.runtime.lastError;
            if (e) {
                this.destroy(), n && n(e);
                return
            }
            chrome.sockets.tcpServer.getInfo(this.socketId, function(t) {
                this.localAddress = t.localAddress, this.localPort = t.localPort, n && n(e)
            }.bind(this))
        }.bind(this))
    }.bind(this))
}, AdbUsbTransport.prototype.destroy = function() {
    chrome.usb.releaseInterface(this.handle, this.iface.interfaceNumber, function() {
        chrome.usb.closeDevice(this.handle, function() {})
    }.bind(this))
}, AdbUsbTransport.prototype.write = function(e, t) {
    var n = {
        direction: "out",
        endpoint: this.out.address,
        data: e
    };
    chrome.usb.bulkTransfer(this.handle, n, t)
}, AdbUsbTransport.prototype.read = function(e, t) {
    var n = {
        direction: "in",
        endpoint: this.in.address,
        length: e
    };
    chrome.usb.bulkTransfer(this.handle, n, unsafeCallback(t))
}, AdbTcpTransport.prototype.destroy = function() {
    this.socket.destroy()
}, AdbTcpTransport.prototype.write = function(e, t) {
    if (this.writing) {
        this.pendingWrites || (this.pendingWrites = []), this.pendingWrites.push({
            data: e,
            callback: t
        });
        return
    }
    this.writing = !0, this.socket.write(e, function() {
        this.writing = !1, t({
            resultCode: 0
        });
        if (!this.pendingWrites) return;
        var e = this.pendingWrites.shift();
        this.pendingWrites.length || (this.pendingWrites = null), this.write(e.data, e.callback)
    }.bind(this))
}, AdbTcpTransport.prototype.read = function(e, t) {
    this.socket.read(e, function(e) {
        t({
            resultCode: 0,
            data: e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
        })
    })
}, AdbDevice.prototype.fatal = function() {
    console.log("fatal error");
    var e = this.onConnected;
    e ? (delete this.onConnected, e()) : this.onError && (this.onError(), delete this.onError), this.destroy()
}, AdbDevice.prototype.destroy = function() {
    for (var e in this.sockets) e = this.sockets[e], e.dataReceived(null);
    this.forwards && $.each(this.forwards, function(e, t) {
        t.destroy()
    }), this.transport.destroy()
}, AdbDevice.kCommandSYNC = 1129208147, AdbDevice.kCommandCNXN = 1314410051, AdbDevice.kCommandOPEN = 1313165391, AdbDevice.kCommandOKAY = 1497451343, AdbDevice.kCommandCLSE = 1163086915, AdbDevice.kCommandWRTE = 1163154007, AdbDevice.kCommandAUTH = 1213486401, AdbDevice.kAuthToken = 1, AdbDevice.kAuthSignature = 2, AdbDevice.kAuthRSAPublicKey = 3, AdbDevice.ADB_PROTOCOL_VERSION = 16777216, AdbDevice.ADB_VERSION = 32, AdbDevice.MAX_PAYLOAD = 4096, AdbDevice.checksum = function(e) {
    e = new Uint8Array(e);
    var t = 0;
    for (var n = 0; n < e.byteLength; n++) t += e[n];
    return t & 4294967295
}, AdbDevice.prototype.sendMessage = function(e, t, n, r, i) {
    r || (r = ""), r.constructor.name == "String" && (r = str2ab(r));
    var s = !0;
    r.byteLength || (s = !1), e == AdbDevice.kCommandAUTH && t == AdbDevice.kAuthSignature && (s = !1), e == AdbDevice.kCommandWRTE && (s = !1);
    var o = r.byteLength;
    s && o++;
    if (s) {
        var u = new ArrayBuffer(r.byteLength + 1),
            a = new Uint8Array(u);
        a.set(new Uint8Array(r)), a[u.byteLength - 1] = 0, r = u
    }
    var f = new ArrayBuffer(24),
        a = new DataView(f);
    a.setUint32(0, e, !0), a.setUint32(4, t, !0), a.setUint32(8, n, !0), a.setUint32(12, o, !0), a.setUint32(16, AdbDevice.checksum(r), !0), a.setUint32(20, e ^ 4294967295, !0), this.transport.write(f, function(e) {
        e.resultCode && this.fatal(e), !r.byteLength && i && i()
    }.bind(this)), this.transport.write(r, function(e) {
        e.resultCode && this.fatal(e), i && i()
    }.bind(this))
}, AdbDevice.prototype.getKey = function(e) {
    chrome.storage.local.get("adbkey", function(t) {
        var n = t.adbkey,
            r = new JSEncrypt({
                default_key_size: 2048
            });
        n ? r.setPrivateKey(n) : (n = r.getPrivateKeyB64(), r.setPrivateKey(n), chrome.storage.local.set({
            adbkey: n
        })), e(r)
    })
}, AdbDevice.prototype._convertToMinCrypt = function(e) {
    var t = 2048,
        n = t / 8 / 4,
        r = BigInteger.ONE.shiftLeft(32),
        i = e.n.clone(),
        s = BigInteger.ONE.shiftLeft(1).pow(t),
        o = s.multiply(s).mod(i),
        u = new Uint32Array(3 + n * 2);
    u[0] = n, u[1] = r.subtract(i.modInverse(r)).intValue();
    var a = n + 2;
    for (var f = 2, l = 2 + n; f < a; ++f, ++l) u[f] = i.mod(r).intValue(), i = i.divide(r), u[l] = o.mod(r).intValue(), o = o.divide(r);
    u[u.length - 1] = e.e;
    var c = "",
        h = new Uint8Array(u.buffer);
    for (var f = 0; f < h.length; ++f) {
        var p = h[f].toString(16);
        p.length == 1 && (c += "0"), c += p
    }
    return hex2b64(c) + " adb@chrome"
}, AdbDevice.prototype.sign = function(e, t) {
    if (e == null) throw "AuthManager is not initialized";
    var n = 256,
        r = new Uint8Array(n);
    r[0] = 0, r[1] = 1;
    var i = [0, 48, 33, 48, 9, 6, 5, 43, 14, 3, 2, 26, 5, 0, 4, 20],
        s = n - i.length - t.byteLength;
    for (var o = 2; o < s; o++) r[o] = 255;
    r.set(new Uint8Array(i), s), s += i.length, r.set(new Uint8Array(t), s);
    var u = new BigInteger(Array.apply([], r));
    return (new Uint8Array(e.doPrivate(u).toByteArray())).buffer
}, AdbDevice.prototype.handleUnknown = function(e, t) {
    console.log("no idea what this socket is."), this.sendMessage(AdbDevice.kCommandCLSE, e, t)
}, AdbDevice.prototype.receiveMessages = function() {
    this.transport.read(24, function(e) {
        if (e.resultCode) {
            this.fatal(e);
            return
        }
        var t = new DataView(e.data),
            n = t.getUint32(0, !0),
            r = t.getUint32(4, !0),
            i = t.getUint32(8, !0),
            s = t.getUint32(12, !0),
            o = t.getUint32(16, !0),
            u = t.getUint32(12, !0),
            a = function(e) {
                switch (n) {
                    case AdbDevice.kCommandOPEN:
                        this.onOpenSocket && this.onOpenSocket(e, r);
                        break;
                    case AdbDevice.kCommandAUTH:
                        console.log("auth:", this), this.getKey(function(t) {
                            if (this.sentSignature) {
                                var n = this._convertToMinCrypt(t.getKey());
                                this.sendMessage(AdbDevice.kCommandAUTH, AdbDevice.kAuthRSAPublicKey, 0, n)
                            } else {
                                this.sentSignature = !0;
                                var r = this.sign(t.getKey(), e);
                                this.sendMessage(AdbDevice.kCommandAUTH, AdbDevice.kAuthSignature, 0, r, function() {})
                            }
                        }.bind(this));
                        break;
                    case AdbDevice.kCommandOKAY:
                        var t = r,
                            s = i,
                            o = this.sockets[s];
                        if (!o) {
                            this.handleUnknown(s, t);
                            return
                        }
                        var u = o.onConnected;
                        u && (delete o.onConnected, o.remoteId = t, u(o));
                        var a = o.pendingWrite;
                        if (a) {
                            u = o.wrote, delete o.wrote, delete o.pendingWrite, o.write(a, u);
                            return
                        }
                        u = o.wrote, u && (delete o.wrote, u());
                        break;
                    case AdbDevice.kCommandCNXN:
                        this.rawProperties = ab2str(e), this.properties = parseConnectionPayload(e);
                        var u = this.onConnected;
                        u && (delete this.onConnected, u(this));
                        break;
                    case AdbDevice.kCommandWRTE:
                        var t = r,
                            s = i,
                            o = this.sockets[s];
                        if (!o) {
                            this.handleUnknown(s, t);
                            return
                        }
                        o.paused || this.sendMessage(AdbDevice.kCommandOKAY, o.localId, o.remoteId), o.dataReceived(new Uint8Array(e));
                        break;
                    case AdbDevice.kCommandCLSE:
                        var t = r,
                            s = i,
                            o = this.sockets[s];
                        if (!o) {
                            console.log("asked to close unknown socket?");
                            return
                        }
                        delete this.sockets[s], o.destroy();
                        break;
                    default:
                        console.log("unknown command: ", n.toString(16), r, i, e)
                }
            }.bind(this);
        if (!u) {
            try {
                a(null)
            } finally {
                this.receiveMessages()
            }
            return
        }
        this.transport.read(u, function(e) {
            if (e.resultCode) {
                this.fatal(e);
                return
            }
            var n = e.data;
            if (AdbDevice.checksum(n) != t.getUint32(16, true)) {
                this.receiveMessages();
                return
            }
            try {
                a(n)
            } finally {
                this.receiveMessages()
            }
        }.bind(this))
    }.bind(this))
}, AdbDevice.prototype.forwardPort = function(e) {
    var t = new Server;
    t.listen({
        port: e.fromPort,
        address: "127.0.0.1"
    }, function(t) {
        this.newSocket(e.to, function(e) {
            Socket.stream(t, e)
        }.bind(this))
    }.bind(this), function() {
        this.forwards[e.fromPort] = t
    }.bind(this))
}, AdbDevice.prototype.newAdbSocket = function(e, t) {
    var n;
    return this.createSocket ? n = this.createSocket(e, t) : n = new AdbSocket(this, e, t), n
}, AdbDevice.prototype.newSocket = function(e, t) {
    var n = ++this.currentSocketId;
    this.sockets[n] = this.newAdbSocket(n, t), this.sendMessage(AdbDevice.kCommandOPEN, n, 0, e)
}, AdbSocket.prototype.write = function(e, t) {
    if (this.pendingWrite || this.wrote) throw console.log("bad adb socket state, already writing"), new Error("bad adb socket state, already writing");
    var n = Math.min(this.device.transport.zero_mask, this.device.maxPayload);
    n < e.byteLength ? (this.pendingWrite = e.slice(n), e = e.slice(0, n)) : this.pendingWrite = null, this.wrote = t, this.device.sendMessage(AdbDevice.kCommandWRTE, this.localId, this.remoteId, e)
}, AdbSocket.prototype.destroy = function() {
    this.device.sendMessage(AdbDevice.kCommandCLSE, this.localId, this.remoteId), this.dataReceived(null)
}, AdbSocket.prototype.dataReceived = Socket.prototype.dataReceived, AdbSocket.prototype.read = Socket.prototype.read, AdbSocket.prototype.pause = Socket.prototype.pause, AdbSocket.prototype.resume = Socket.prototype.resume, AdbSocket.prototype.unshift = Socket.prototype.unshift, AdbSocket.prototype.onPause = function() {}, AdbSocket.prototype.onResume = function() {
    this.device.sendMessage(AdbDevice.kCommandOKAY, this.localId, this.remoteId)
}, AdbServer.prototype.start = function() {
    if (this.server) {
        console.log("ADB Server started while already started");
        return
    }
    this.lastChange = _nowMs(), this.clients = {}, this.adbDevices = {}, this.pendingDevices = {}, this.refreshing = {};
    var e = new Server;
    e.listen({
        port: this.port,
        address: "127.0.0.1"
    }, function(e) {
        var t = new AdbClient(this, e),
            n = ++this.currentSocketId;
        this.clients[n] = t, e.onClose = function() {
            delete this.clients[n]
        }.bind(this), t.receiveHeader()
    }.bind(this), function(t) {
        if (t) {
            console.log("adb server failed to listen: " + t);
            return
        }
        this.server = e, this.refresh()
    }.bind(this))
}, AdbServer.prototype.isRunning = function() {
    return this.server != null
}, AdbServer.prototype.kill = function() {
    this.lastChange = _nowMs(), this.server.destroy(), this.server = null, this.refreshing = {};
    for (var e in this.clients) e = this.clients[e], e.socket.destroy();
    this.clients = {};
    for (var t in this.adbDevices) t = this.adbDevices[t], t.destroy();
    this.adbDevices = {}, this.pendingDevices = {}
}, AdbServer.prototype.selectDevice = function() {
    chrome.usb.getUserSelectedDevices({
        filters: [{
            interfaceClass: 255,
            interfaceSubclass: 66,
            interfaceProtocol: 1
        }]
    }, function(e) {
        for (var t in e) t = e[t], this.refreshDevice(t)
    }.bind(this))
}, AdbServer.prototype.withAdbDevice = function(e, t) {
    e.onError = function() {
        this.lastChange = _nowMs(), delete this.adbDevices[e.serialno]
    }.bind(this);
    var n = function(n) {
        this.lastChange = _nowMs(), e.serialno = n.trim(), this.adbDevices[e.serialno] = e, console.log("found device: " + e.serialno), t(e)
    }.bind(this);
    if (e.serialno) {
        n(e.serialno);
        return
    }
    e.newSocket("shell:getprop ro.serialno", function(e) {
        readString(e, function(e) {
            n(e)
        }.bind(this))
    }.bind(this))
}, AdbServer.prototype.tryDevice = function(e, t) {
    function s(s) {
        var o = s.interfaceNumber;
        for (var u in n) {
            u = n[u];
            if (u.transport.iface && u.transport.handle && u.transport.iface.interfaceNumber == o && u.transport.handle.productId == e.productId && u.transport.handle.vendorId == e.vendorId) return !1
        }
        return r[o] ? !1 : (r[o] = e, console.log("claiming:", e, s), chrome.usb.claimInterface(e, s.interfaceNumber, function() {
            console.log("claimed:", e, s), connectUsbAdb(e, s, function(e) {
                if (!e) {
                    delete r[o], t();
                    return
                }
                i.withAdbDevice(e, function() {
                    delete r[o], t()
                })
            })
        }), !0)
    }
    var n = this.adbDevices,
        r = this.pendingDevices,
        i = this;
    chrome.usb.listInterfaces(e, unsafeCallback(function(t) {
        var n = !1;
        for (var r in t) r = t[r], r.interfaceClass == 255 && r.interfaceSubclass == 66 && r.interfaceProtocol == 1 && (n |= s(r));
        n || chrome.usb.closeDevice(e)
    }))
}, AdbServer.prototype.refreshDevice = function(e, t) {
    chrome.usb.openDevice(e, function(e) {
        this.tryDevice(e, t)
    }.bind(this))
}, AdbServer.prototype.refresh = function() {
    if (!this.server) {
        console.log("adb server refresh requested while server killed");
        return
    }
    var e = _nowMs();
    if (this.server.lastRefresh && this.server.lastRefresh > e - 1e4) return;
    this.server.lastRefresh = e;
    var t = chrome.runtime.getManifest().permissions.pop().usbDevices;
    $(t).each(function(e, t) {
        var n = t.vendorId + "&" + t.productId;
        if (this.refreshing[n]) return;
        this.refreshing[n] = !0, chrome.usb.findDevices({
            productId: t.productId,
            vendorId: t.vendorId
        }, function(e) {
            var r = e.length;
            if (!r) {
                delete this.refreshing[n];
                return
            }
            console.log("found:", t, e);
            for (var i in e) console.log("trying:", e[i]), this.tryDevice(e[i], function() {
                r--, r || delete this.refreshing[n]
            }.bind(this))
        }.bind(this))
    }.bind(this));
    var e = _nowMs();
    for (var n in this.clients) n = this.clients[n], n.tracking && e != n.tracking && (n.tracking = e, n.writeDevices({
        filter: n.tracked
    }))
}, AdbServer.prototype.stop = function() {
    this.server.destroy()
}, AdbClient.prototype.resolveTransport = function(e, t) {
    if (t) {
        var n = this.server.adbDevices[t];
        return n ? n : "device not found"
    }
    var r = Object.keys(this.server.adbDevices);
    if (r > 1) return "more than one device";
    if (r == 0) return "no devices connected";
    for (var i in this.server.adbDevices) return this.server.adbDevices[i]
}, AdbClient.prototype.write = function(e, t) {
    t || (t = "OKAY"), e = str2ab(e);
    var n = e.byteLength,
        r = make4Len16(n);
    r = str2ab(t + r);
    var i = appendBuffer(new Uint8Array(r), new Uint8Array(e)).buffer;
    this.socket.write(i, function() {})
}, AdbClient.prototype.writeDevices = function(e) {
    var e = e || {},
        t = e.longformDevices,
        n = e.filter || null,
        r = "";
    for (var i in this.server.adbDevices) {
        if (n && n[i]) continue;
        i = this.server.adbDevices[i], r += i.serialno + "	device", t && (i.transport.constructor.name == "AdbUsbTransport" ? r += " usb:" + i.transport.iface.interfaceNumber : r += " tpcip:something", r += " product:" + i.properties["ro.product.name"], r += " model:" + i.properties["ro.product.model"], r += " device:" + i.properties["ro.product.device"]), r += "\n"
    }
    if (n != null && r.length == 0) return;
    this.write(r)
}, AdbClient.prototype.handlePayload = function(e) {
    e = ab2str(e);
    var t = e.split(":"),
        n = e,
        r;
    t[0] == "host-serial" && (t[0] = "host", r = t.splice(1, 1)[0], Number.isInteger(parseInt(t[1])) && (r += ":" + t.splice(1, 1)[0])), t.length >= 2 && (n = t[0] + ":" + t[1]);
    switch (n) {
        case "host:version":
            this.write(make4Len16(AdbDevice.ADB_VERSION));
            break;
        case "host:devices-l":
        case "host:devices":
            var i = e == "host:devices-l";
            this.server.refresh(), this.writeDevices({
                longformDevices: i
            });
            break;
        case "host:transport-usb":
        case "host:transport-any":
            var s = this.resolveTransport(e, r);
            if (s.constructor.name == "String") {
                this.write(s, "FAIL");
                break
            }
            this.transport = s, this.socket.write(str2ab("OKAY"), function() {});
            break;
        case "host:kill":
            this.server.kill();
            break;
        case "host:connect":
            if (t.length < 3) {
                this.write("need more arguments for connect <host>[:<port>]", "FAIL");
                break
            }
            var o = t[2],
                u = 5555;
            t.length > 3 && (u = Number.parseInt(t[3])), Socket.connect({
                host: o,
                port: u
            }, function(e) {
                if (!e) return this.write("connecting " + o + " " + u, "FAIL"), this;
                var t = new AdbDevice(new AdbTcpTransport(e), function(e) {
                    this.server.withAdbDevice(e, function() {
                        console.log("connected?"), this.socket.write(str2ab("OKAYOKAY"), function() {})
                    }.bind(this))
                }.bind(this));
                t.serialno = o + ":" + u, e.onClose = function() {
                    t.fatal("socket closed")
                }.bind(this), t.sendMessage(AdbDevice.kCommandCNXN, AdbDevice.ADB_PROTOCOL_VERSION, AdbDevice.MAX_PAYLOAD, "host::"), t.receiveMessages()
            }.bind(this));
            break;
        case "host:track-devices":
            this.tracking = _nowMs(), this.writeDevices(), this.tracked = Object.fromArray(Object.keys(this.server.adbDevices));
            break;
        case "host:forward":
            var a = t.join(":").substring(n.length + 1).split(";"),
                f = a[0].split(":"),
                l = parseInt(f[1]),
                s = this.resolveTransport(e, r);
            if (s.constructor.name == "String") {
                this.write(s, "FAIL");
                break
            }
            s.forwardPort({
                fromPort: l,
                to: a[1]
            }), this.socket.write(str2ab("OKAYOKAY"), function() {}.bind(this));
            break;
        default:
            if (this.transport) {
                var s = this.transport;
                s.newSocket(e, function(e) {
                    this.socket.write(str2ab("OKAY"), function() {}), Socket.stream(e, this.socket)
                }.bind(this));
                return
            }
            var c = "host:transport:";
            if (e.startsWith(c)) {
                var r = e.substr(c.length),
                    h = this.server.adbDevices[r];
                if (!h) {
                    this.write("device not found", "FAIL");
                    return
                }
                this.transport = h, this.socket.write(str2ab("OKAY"), function() {});
                break
            }
            console.log("unknown request: " + e), this.write("unknown command: " + e, "FAIL");
            var p = chrome.runtime.getManifest().name;
            chrome.notifications.create({
                type: "basic",
                iconUrl: "/icon.png",
                title: p,
                message: p + "'s adb server encountered an unknown adb command.\nYou may want to close " + p + " and start your adb binary manually."
            })
    }
    this.receiveHeader()
}, AdbClient.prototype.receivePayload = function(e) {
    var t = parseInt(ab2str(e), 16);
    this.socket.read(t, this.handlePayload.bind(this))
}, AdbClient.prototype.receiveHeader = function() {
    this.socket.read(4, this.receivePayload.bind(this))
};
var Adb = {};
Adb.sendHostCommand = function(e, t) {
    Socket.connect({
        host: "127.0.0.1",
        port: 5037
    }, function(n) {
        if (!n) {
            t();
            return
        }
        e = make4Len16(e.length) + e, n.read(4, function(e) {
            if (ab2str(e) != "OKAY") {
                n.destroy(), t();
                return
            }
            n.read(4, function(e) {
                var r = ab2str(e);
                e = parseInt(r, 16);
                if (e == 0 || r == "OKAY") {
                    t(n, new ArrayBuffer(0));
                    return
                }
                n.read(e, function(e) {
                    t(n, e)
                })
            })
        }), n.write(str2ab(e), function() {})
    })
}, Adb.devices = function(e) {
    function n(n) {
        var r = n;
        n = n.replace("	", " ");
        var i = n.indexOf(" ");
        if (i == -1) {
            e({});
            return
        }
        var s = n.substring(0, i);
        n = n.substring(i).trim();
        var o;
        while (o != n) o = n, n = n.replace("  ", " ");
        var u = {};
        while (n.length) {
            i = n.indexOf(":");
            if (i == -1) break;
            var a = n.substring(0, i),
                f = n.substring(i + 1),
                l = f.indexOf(" "),
                c = f.indexOf(":"),
                h;
            if (l == -1 || c == -1) h = f, n = "";
            else
                while (l != -1 && l < c) h = f.substring(0, l), n = f.substring(l + 1), l = f.indexOf(" ", l + 1);
            u[a] = h
        }
        u.model && (t[s] = {
            name: u.model.replace("_", " "),
            properties: r
        })
    }
    var t = {};
    Adb.sendHostCommand("host:devices-l", function(r, i) {
        if (!r) {
            e();
            return
        }
        r.destroy(), i = ab2str(i), i = i.trim();
        var s = i.split("\n");
        for (var o in s) o = s[o], n(o);
        e(t)
    })
}, Adb.killServer = function(e) {
    Adb.sendHostCommand("host:kill-server", function(t, n) {
        if (!t) {
            e();
            return
        }
        t.destroy(), n = ab2str(n), e && e()
    })
}, Adb.adbTcpIp = function(e, t, a) {
    var n = e.command,
        r = e.serialno;
    Adb.sendClientCommand({
        serialno: r,
        command: "tcpip:" + n
    }, function(e) {
        if (!e) {
            t();
            return
        }
        readString(e, function(e) {
            t(e)
        })
    })
}, Adb.adbUsb = function(e, t, a) {
    var n = e.command,
        r = e.serialno;
    Adb.sendClientCommand({
        serialno: r,
        command: "usb:"
    }, function(e) {
        if (!e) {
            t();
            return
        }
        readString(e, function(e) {
            t(e)
        })
    })
}, Adb.sendClientCommand = function(e, t) {
    var n = e.command,
        r = e.serialno;
    Socket.connect({
        host: "127.0.0.1",
        port: 5037
    }, function(e) {
        if (!e) {
            t();
            return
        }
        e.read(4, function(r) {
            var i = ab2str(r);
            if (i != "OKAY") {
                e.destroy(), t(null);
                return
            }
            var s = n;
            s = make4Len16(s.length) + s, e.read(4, function(n) {
                var r = ab2str(n);
                if (r != "OKAY") {
                    e.destroy(), t(null);
                    return
                }
                t(e)
            }), e.write(str2ab(s), function() {})
        });
        var i = "host:transport:" + r;
        i = make4Len16(i.length) + i, e.write(str2ab(i), function() {})
    })
}, Adb.shell = function(e, t) {
    var n = e.command,
        r = e.serialno;
    Adb.sendClientCommand({
        serialno: r,
        command: "shell:" + n
    }, function(e) {
        if (!e) {
            t();
            return
        }
        readString(e, function(e) {
            t(e)
        })
    })
}, Adb.forward = function(e, t) {
    var n = "host-serial:" + e.serialno + ":forward:" + e.from + ";" + e.to;
    Adb.sendHostCommand(n, function(e, n) {
        e && e.destroy(), t(e, n)
    })
}, AdbSync.MKID = function(e, t, n, r) {
    return e.charCodeAt(0) | t.charCodeAt(0) << 8 | n.charCodeAt(0) << 16 | r.charCodeAt(0) << 24
}, AdbSync.ID_RECV = AdbSync.MKID("R", "E", "C", "V"), AdbSync.ID_SEND = AdbSync.MKID("S", "E", "N", "D"), AdbSync.ID_DONE = AdbSync.MKID("D", "O", "N", "E"), AdbSync.ID_DATA = AdbSync.MKID("D", "A", "T", "A"), AdbSync.DATA_MAX = 65536, Adb.pull = function(e, t) {
    var n = e.file,
        r = e.serialno,
        i = e.fileEntry;
    Adb.sendClientCommand({
        serialno: r,
        command: "sync:"
    }, function(e) {
        if (!e) {
            t();
            return
        }
        i.createWriter(function(r) {
            var s = new ArrayBuffer(8),
                o = new DataView(s);
            o.setUint32(0, AdbSync.ID_RECV, !0), o.setUint32(4, n.length, !0), e.write(s, function() {
                e.write(str2ab(n), function() {
                    function n(t) {
                        e.read(t, function(e) {
                            r.write(new Blob([e]))
                        })
                    }

                    function s() {
                        e.read(8, function(r) {
                            var s = new DataView(r.buffer, r.byteOffset, r.byteLength),
                                o = s.getUint32(0, !0);
                            if (o == AdbSync.ID_DATA) {
                                var u = s.getUint32(4, !0);
                                n(u);
                                return
                            }
                            e.destroy();
                            if (o == AdbSync.ID_DONE) {
                                t(i);
                                return
                            }
                            t()
                        })
                    }
                    r.onwriteend = function(e) {
                        s()
                    }, s()
                })
            })
        })
    })
}, Adb.push = function(e, t) {
    var n = e.file,
        r = e.serialno,
        i = e.socket;
    Adb.sendClientCommand({
        serialno: r,
        command: "sync:"
    }, function(e) {
        if (!e) {
            t();
            return
        }
        var r = new ArrayBuffer(8),
            s = new DataView(r);
        s.setUint32(0, AdbSync.ID_SEND, !0), s.setUint32(4, n.length, !0), e.write(r, function() {
            e.write(str2ab(n), function() {
                function s() {
                    i.read(function(e) {
                        if (e.byteLength > AdbSync.DATA_MAX) {
                            var t = e.subarray(AdbSync.DATA_MAX);
                            e = e.subarray(0, AdbSync.DATA_MAX), i.unshift(t)
                        }
                        o(e)
                    })
                }

                function o(t) {
                    var n = new ArrayBuffer(8),
                        r = new DataView(n);
                    r.setUint32(0, AdbSync.ID_DATA, !0), r.setUint32(4, t.byteLength, !0), e.write(n, function() {
                        var n = t.buffer;
                        if (t.byteOffset || t.length != n.byteLength) n = n.slice(t.byteOffset, t.byteOffset + t.byteLength);
                        e.write(n, function() {
                            s()
                        })
                    })
                }
                var n, r = !0;
                i.onClose = function() {
                    var n = new ArrayBuffer(8),
                        r = new DataView(n);
                    r.setUint32(0, AdbSync.ID_DONE, !0), r.setUint32(4, 0, !0), e.write(n, function() {
                        e.read(8, function() {
                            t()
                        })
                    })
                }, s()
            })
        })
    })
};
var adbServer = new AdbServer({
        start: !1
    }),
    shells = {},
    list, openShellWindows = 0;
chrome.app.runtime.onLaunched.addListener(function() {
    openList()
});
var scrIcon = {},
    capIcon = {},
    adbDevices = {},
    wldFullVersion=0,
    tcpMode=0,
    hadAdbServer;
initRefresher(), refreshDevices();