'use strict';(function(c){"object"==typeof exports&&"object"==typeof module?c(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],c):c(CodeMirror)})(function(c){c.registerHelper("fold","brace",function(d,a){function f(g){for(var b=a.ch,f=0;;)if(b=0>=b?-1:h.lastIndexOf(g,b-1),-1==b){if(1==f)break;f=1;b=h.length}else{if(1==f&&b<a.ch)break;e=d.getTokenTypeAt(c.Pos(k,b+1));if(!/^(comment|string)/.test(e))return b+1;--b}}var k=a.line,h=d.getLine(k),g,
e,r="{",t="}";g=f("{");null==g&&(r="[",t="]",g=f("["));if(null!=g){var u=1,v=d.lastLine(),n,q,l=k;a:for(;l<=v;++l)for(var m=d.getLine(l),b=l==k?g:0;;){var p=m.indexOf(r,b),b=m.indexOf(t,b);0>p&&(p=m.length);0>b&&(b=m.length);b=Math.min(p,b);if(b==m.length)break;if(d.getTokenTypeAt(c.Pos(l,b+1))==e)if(b==p)++u;else if(!--u){n=l;q=b;break a}++b}if(null!=n&&(k!=n||q!=g))return{from:c.Pos(k,g),to:c.Pos(n,q)}}});c.registerHelper("fold","import",function(d,a){function f(e){if(e<d.firstLine()||e>d.lastLine())return null;
var a=d.getTokenAt(c.Pos(e,1));/\S/.test(a.string)||(a=d.getTokenAt(c.Pos(e,a.end+1)));if("keyword"!=a.type||"import"!=a.string)return null;var g=e;for(e=Math.min(d.lastLine(),e+10);g<=e;++g){var f=d.getLine(g).indexOf(";");if(-1!=f)return{startCh:a.end,end:c.Pos(g,f)}}}a=a.line;var k=f(a),h;if(!k||f(a-1)||(h=f(a-2))&&h.end.line==a-1)return null;for(h=k.end;;){var g=f(h.line+1);if(null==g)break;h=g.end}return{from:d.clipPos(c.Pos(a,k.startCh+1)),to:h}});c.registerHelper("fold","include",function(d,
a){function f(a){if(a<d.firstLine()||a>d.lastLine())return null;var e=d.getTokenAt(c.Pos(a,1));/\S/.test(e.string)||(e=d.getTokenAt(c.Pos(a,e.end+1)));if("meta"==e.type&&"#include"==e.string.slice(0,8))return e.start+8}a=a.line;var k=f(a);if(null==k||null!=f(a-1))return null;for(var h=a;null!=f(h+1);)++h;return{from:c.Pos(a,k+1),to:d.clipPos(c.Pos(h))}})});