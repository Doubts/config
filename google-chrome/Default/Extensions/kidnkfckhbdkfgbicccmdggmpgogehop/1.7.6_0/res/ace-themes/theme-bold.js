/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

define('ace/theme/bold', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-bold";
exports.cssText = "/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: 114c3050-111d-8b8d-dd83-0b99ccebd246) */\
.ace-bold .ace_gutter {\
background: #e8e8e8;\
color: #333;\
}\
.ace-bold .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-bold {\
background-color: #2a2626;\
color: #ffffff;\
}\
.ace-bold .ace_cursor {\
color: #f8f8f0;\
}\
.ace-bold .ace_marker-layer .ace_selection {\
background: #3D8E91;\
}\
.ace-bold.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #2a2626;\
border-radius: 2px;\
}\
.ace-bold .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174);\
}\
.ace-bold .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #3b3a32;\
}\
.ace-bold .ace_marker-layer .ace_active-line {\
background: #393434;\
}\
.ace-bold .ace_gutter-active-line {\
background-color: #393434;\
}\
.ace-bold .ace_marker-layer .ace_selected-word {\
border: 1px solid #3D8E91;\
}\
.ace-bold .ace_fold {\
background-color: #B4B7AD;\
border-color: #ffffff;\
}\
.ace-bold .ace_keyword{color:#F0624B;}.ace-bold .ace_keyword.ace_other.ace_unit{color:#3D8E91;}.ace-bold .ace_constant.ace_language{color:#F0624B;}.ace-bold .ace_constant.ace_numeric{color:#F7A21B;}.ace-bold .ace_constant.ace_character{color:#F0624B;}.ace-bold .ace_constant.ace_other{color:#F0624B;}.ace-bold .ace_support.ace_function{color:#3D8E91;}.ace-bold .ace_support.ace_constant{color:#F0624B;}.ace-bold .ace_support.ace_constant.ace_property-value{color:#F7A21B;}.ace-bold .ace_support.ace_class{font-style:italic;\
color:#F0624B;}.ace-bold .ace_support.ace_type{font-style:italic;\
color:#F0624B;}.ace-bold .ace_storage{color:#F0624B;}.ace-bold .ace_storage.ace_type{color:#3D8E91;}.ace-bold .ace_invalid{color:#f8f8f0;\
background-color:#00a8c6;}.ace-bold .ace_invalid.ace_deprecated{color:#f8f8f0;\
background-color:#00a8c6;}.ace-bold .ace_string{color:#F7A21B;}.ace-bold .ace_comment{color:#534b4b;}.ace-bold .ace_variable{color:#B4B7AD;}.ace-bold .ace_variable.ace_parameter{font-style:italic;}.ace-bold .ace_entity.ace_other.ace_attribute-name{color:#F0624B;}.ace-bold .ace_entity.ace_name.ace_function{color:#B4B7AD;}.ace-bold .ace_entity.ace_name.ace_tag{color:#3D8E91;}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
